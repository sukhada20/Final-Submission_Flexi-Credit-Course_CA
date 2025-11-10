import React from 'react';

const SearchBar = ({ search, setSearch }) => (
  <div className="search-container">
    <input
      type="text"
      className="search-input"
      placeholder="Enter location, property type, or keywords..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <button className="search-btn">Start Exploring</button>
  </div>
);

export default SearchBar;
