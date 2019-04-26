import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { AppRouter } from "./AppRouter";


import { Row, Col, Button, Pager } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    );
  }
}

export default App;
