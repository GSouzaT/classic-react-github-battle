import * as React from "react";
import PropTypes from "prop-types";

const container = {
  position: "relative",
  display: "flex",
};

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false,
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.setState({ hovering: true });
  }

  mouseOut() {
    this.setState({ hovering: false });
  }

  render() {
    const { hovering } = this.state;
    const { element, children } = this.props;

    return (
      <div
        style={container}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        {hovering === true && element}
        {children}
      </div>
    );
  }
}

Tooltip.PropTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.node.isRequired,
};
