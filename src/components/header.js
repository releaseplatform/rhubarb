import React from 'react';
import '../header.css';
import '../grid.css';
import Logo from '../logo.png';
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
