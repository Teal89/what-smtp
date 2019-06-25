import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './views.css';
import Input from '../components/Input';
import CardSmall from '../components/CardSmall';
import Tools from '../components/Tools';
import Delivery from '../components/Delivery';

class Home extends Component {
  render() {
    return (  
      <Grid>
        <Row>
          <Col sm={12}>
            <Input home />
            <Tools />
          </Col>
        </Row>
        <div className="container-cards">
        <div className="jumbotron jumbotron-fluid">
          
        <Row className="card-row">
          <Col sm={4}>
            <CardSmall
              title="Deliverability Resources"
              list={['Warming up domains', 'Improving domain reputation']}
            />
          </Col>
          <Col sm={4}>
            <CardSmall
              title="Best Practices"
              list={['Sending password reset email', 'User invitations']}
            />
          </Col>
          <Col sm={4}>
            <CardSmall
              title="Email Providers"
              list={['Evaluating service providers', 'Postmark']}
            />
          </Col>
        </Row>
        </div>
        </div>
      </Grid>



    );
  }
}

export default Home;


