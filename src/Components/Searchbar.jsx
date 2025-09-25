import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={value}
      onChange={onChange}
      className="search-bar"
    />
  );
}

export default SearchBar;
