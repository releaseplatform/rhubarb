import React from 'react';
import '../styles/header.css';
import '../styles/grid.css';
import Logo from '../assets/logo.png';
import Search from './search.js';

class Header extends React.Component {
  render() {
    return(
      <div className="headerContainer">
        <div className="container">
          <div className="grid-item grid-half">
            <img src={Logo} />
          </div>
          <div className="grid-item grid-half right">
            <Search />
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
