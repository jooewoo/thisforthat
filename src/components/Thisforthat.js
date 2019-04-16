import React, { Component } from "react";
import { getQuotes } from "../api";
import Quotes from "./Quotes";
import { Icon, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../index.css";

class Thisforthat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: []
    };
  }

  componentDidMount = async () => {
    getQuotes()
      .then(res => this.setState({ quotes: res.data }))
      .catch(err => console.error("Error", err));
  };

  getNewQuotes = async e => {
    e.preventDefault();
    getQuotes()
      .then(res => this.setState({ quotes: res.data }))
      .catch(err => console.error("Error", err));
  };

  render() {
    return (
      <div>
        <Quotes
          this={this.state.quotes.this}
          that={this.state.quotes.that}
          getNewQuotes={this.getNewQuotes}
        />
        <Button animated onClick={this.getNewQuotes}>
          <Button.Content visible>
            <Icon name="redo" />
          </Button.Content>
          <Button.Content hidden>Refresh</Button.Content>
        </Button>
        <Button color="twitter" size={"medium"} className="twitter">
          <Icon name="twitter" />
          <a
            href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fitsthisforthat.com%2F&ref_src=twsrc%5Etfw&text=Wait%2C%20what%20does%20your%20startup%20do%3F&tw_p=tweetbutton&url=http%3A%2F%2Fitsthisforthat.com"
            target="_blank"
            rel="noreferrer noopener"
            className="twitter"
          >
            Tweet
          </a>
        </Button>
      </div>
    );
  }
}

export default Thisforthat;
