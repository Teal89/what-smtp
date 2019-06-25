import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { Link } from 'react-router-dom';

import codes from '../codes';

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputValueLen = inputValue.length;

  return inputValueLen === 0
    ? []
    : Object.keys(codes).filter(
        code =>
          code
            .split('_')
            .join(' ')
            .toLowerCase()
            .indexOf(inputValue) > -1,
      );
};

const getSuggestionValue = suggestion => suggestion;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      value: props.value || '',
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  renderSuggestion = suggestion => {
    const { home = false } = this.props;
    const value = suggestion
      .split('_')
      .join(' ')
      .toLowerCase();
    if (home) {
      return (
        <Link
          className="suggestion"
          to={{
            pathname: '/results',
            state: { value: value, key: suggestion, category: 'error' },
          }}
        >
          {value}
        </Link>
      );
    }

    return <div className="suggestion">{value}</div>;
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    this.setState({
      value: suggestion
        .split('_')
        .join(' ')
        .toLowerCase(),
    });
    this.props.onSuggestionSelect && this.props.onSuggestionSelect(suggestion);
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'type error code',
      value,
      onChange: this.handleChange,
    };
    return (
      <div className="input-container">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          focusInputOnSuggestionClick
        />
      </div>
    );
  }
}

export default Input;
