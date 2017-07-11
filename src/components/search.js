import React from 'react';

class Search extends React.Component {
  render() {
    return(
      <form>
        <input type="text" className="searchBar" placeholder="Search transactions" />
      </form>
    )
  }
}

export default Search;
