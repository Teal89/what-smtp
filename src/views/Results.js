import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import "./views.css";
import codes from "../codes";
import Input from "../components/Input";
import Sidebar from "../components/Sidebar";
import CardLarge from "../components/CardLarge";

class Results extends Component {
  state = {
    value: ""
  };

  componentDidMount() {
    this.setState({ value: this.props.location.state.key });
  }

  handleSuggestionSelect = key => {
    this.setState({ value: key });
  };

  render() {
    console.log({ value: this.state.value, code: codes[this.state.value] });
    const title = this.state.value
      .split("_")
      .join(" ")
      .toLowerCase();
    const key = this.state.value;
    const obj = codes[key];
    return (
      <React.Fragment>
        <Grid>
          <Row>
            <Col sm={12}>
              <Input
                value={this.props.location.state.value}
                onSuggestionSelect={this.handleSuggestionSelect}
              />
            </Col>
          </Row>
        </Grid>
        <Grid fluid className="content-grid">
          <Row>
            <Col sm={2}>
              <Sidebar category={this.props.location.state.category} />
            </Col>
            <Col sm={8}>
              <CardLarge
                title={title}
                para1={obj && obj["what_does_it_mean"]}
                para2={obj && obj["How_to_fix_it"]}
                links={obj && obj["Other_References"]}
              />
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Results;
