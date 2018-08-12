import React from 'react';

const SearchBar = (props) => {
  return (
    <form>
      <input type="text" placeholder="Search"
             value={props.filterText}
             onChange={(event) => props.onFilterTextChange(event.target.value)}
      />
    </form>
  );
};

export default SearchBar;