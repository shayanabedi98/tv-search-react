import React from "react";

const Search = ({ fetchShow, input, handleChange }) => {
  return (
    <div className="search">
        <h1>TV Show Search</h1>
      <div className="search-bar">
        <input
          type="text"
          onKeyDown={(e) => e.key === "Enter" && fetchShow()}
          onChange={handleChange}
          value={input}
          placeholder="Search for a TV Show"
        />
        <button onClick={fetchShow}>Search</button>
      </div>
      <h2>This search will display up to the 10 most relevant TV Shows.</h2>
    </div>
  );
};

export default Search;
