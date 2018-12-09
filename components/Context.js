import React, { Component } from "react";
import PropTypes from "prop-types";

class Context extends Component {
  static childContextTypes = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  };

  getChildContext() {
    return {
      user: this.props.user
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

export default Context;
