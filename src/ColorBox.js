import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        { this.props.opacity > 0.10000000000000014 ? <ColorBox opacity={this.props.opacity -.1} /> : null}
        {console.log(this.props.opacity)}
      </div>
    )
  }
  
}
