import React from "react";

const Search = ({ fetchShow, input, handleChange }) => {
  return (
    <div className="search">
        <h1>TV Show Search</h1>
      <div className="search-bar">
        <input
          required
          type="text"
          onKeyDown={(e) => e.key === "Enter" && fetchShow()}
          onChange={handleChange}
          value={input}
        />
        <button onClick={toggleResult} onClick={fetchShow}>Search</button>
      </div>
    </div>
  );
};

export default Search;
