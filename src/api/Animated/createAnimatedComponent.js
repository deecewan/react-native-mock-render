import React from 'react';
import PropTypes from 'prop-types';

function createAnimatedComponent(Component) {
  class AnimatedComponent extends React.Component {
    static displayName = `Animated.${Component.displayName}`;
    static propTypes = {
      children: PropTypes.node,
    }

    setNativeProps() {
    }

    render() {
      return React.createElement(
        `Animated.${Component.displayName}`,
        this.props,
        <Component
          ref={() => {}}
        >
          {this.props.children}
        </Component>
      );
    }
  }

  return AnimatedComponent;
}

module.exports = createAnimatedComponent;
