import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const newOp = Math.round((this.props.opacity-0.1) * 10) / 10

    if (newOp >= 0.1) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}} >
          <ColorBox opacity={newOp} />
        </div>
      )
    } else {
      return null
    }
  }
  
}
