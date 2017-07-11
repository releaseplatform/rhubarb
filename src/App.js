import React from 'react';
import './styles/App.css';
import './styles/table.css'
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
