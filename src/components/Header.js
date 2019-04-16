import React, { Fragment } from "react";
import { Header } from "semantic-ui-react";

export default () => (
  <Fragment>
    <Header className="what" color="red" as="h1">
      WAIT, WHAT DOES YOUR STARTUP DO?
    </Header>
    <Header className="basically" inverted color="yellow" as="h2">
      SO, BASICALLY, IT'S LIKE A
    </Header>
  </Fragment>
);
