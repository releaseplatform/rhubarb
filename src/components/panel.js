import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/panel.css';

class Panel extends React.Component {
  render() {
    return(
      <div className="grid-item c-panel">
        <h1>Payroll</h1>
        <h2>May - June 2017</h2>
        <br />
        <p>This is a list of all the influencers that have created sales this month.</p>
      </div>
    )
  }
}

export default Panel;
