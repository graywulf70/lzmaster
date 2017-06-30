/*
    ./client/components/App.jsx
*/
import React from 'react';
import Heading from './Heading.jsx'

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <Heading classname="jumbotron" headline="Hello, world!" />
      </div>);
  }
}