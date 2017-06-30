import React from 'react';

export default class Heading extends React.Component {
  render() {
    return (
     <div className={this.props.classname}>
        <h1>{this.props.headline}</h1>
        <p>Live the dream by building your own railroad empire in your back yard.</p>
      </div>);
  }
}