import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { Row, Col, Button, Pager } from "react-bootstrap";

export class Homepage extends Component {
  render(){
    return (
      <Row className="picker">
        <Col xs={12} className="text-center">
          <Row>
            <h1>Welcome to Tweeeter</h1>
            <em>
              <h4>Choose your state container</h4>
            </em>
          </Row>
          <Row>
            <Pager>
              <Button
                onClick={() => {
                  this.props.history.push("/redux")
                }}
                bsStyle="primary"
                bsSize="large"
              >
                Blue Pill (Redux)
              </Button>
              <span className="spacer" />
              <Button
                onClick={() => {
                  this.props.history.push("/mst")
                }}
                bsStyle="danger"
                bsSize="large"
              >
                Red Pill (MST)
              </Button>
            </Pager>
          </Row>
        </Col>
      </Row>
    );
  }
}
