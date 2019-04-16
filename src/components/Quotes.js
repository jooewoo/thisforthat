import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.css";

class Quotes extends Component {
  render() {
    return (
      <div className="body">
        <div>
          <button className="this" onClick={this.props.getNewQuotes}>
            {this.props.this}
          </button>
        </div>
        <div className="for">for</div>
        <div>
          <button className="that" onClick={this.props.getNewQuotes}>
            {this.props.that}
          </button>
        </div>
      </div>
    );
  }
}

Quotes.propTypes = {
  this: PropTypes.string,
  that: PropTypes.string
};

export default Quotes;
