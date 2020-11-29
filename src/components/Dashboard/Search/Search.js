import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
  return (
    <div className='Search'>
      <SearchIcon className='Search__Icon' />
      <input className='Search__input' type='text' placeholder='search' />
    </div>
  );
}

export default Search;
