import React from 'react';
import './App.css';
import Header from './components/header.js';
import Table from './components/table.js';
import Panel from './components/panel.js';

class App extends React.Component {
  render() {
    return (
      <div className="root">
        <Header />
        <div className="container">
          <Panel />
          <Table />
        </div>
      </div>
    );
  }
}

export default App;
