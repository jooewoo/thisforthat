import React, { Component } from "react";
import Header from "./components/Header";
import Thisforthat from "./components/Thisforthat";
import { Container, Divider } from "semantic-ui-react";
import "./index.css";

class App extends Component {
  render() {
    return (
      <Container className="App" textAlign="center">
        <Header />
        <Divider />
        <Thisforthat />
      </Container>
    );
  }
}

export default App;
