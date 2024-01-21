import * as React from "react";
import PropTypes from "prop-types";
import withHover from "./withHover";

const container = {
  position: "relative",
  display: "flex",
};

class Tooltip extends React.Component {
  render() {
    const { element, children, hovering } = this.props;

    return (
      <div style={container}>
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

export default withHover(Tooltip);
