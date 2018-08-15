import React from 'react';

const SearchBar = (props) => {
  return (
    <form>
      <div className="input-group input-group-lg">
        <input type="text" placeholder="Search Category"
               className="form-control" value={props.filterText}
               onChange={(event) => props.onFilterTextChange(event.target.value)}/>
      </div>
    </form>
  );
};

export default SearchBar;

