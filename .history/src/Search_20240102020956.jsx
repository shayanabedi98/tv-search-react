import React from "react";

const Search = ({ fetchShow, input, handleChange }) => {
  return (
    <div>
        <h1>TV Show Search</h1>
      <div>
        <input
          required
          type="text"
          onKeyDown={(e) => e.key === "Enter" && fetchShow()}
          onChange={handleChange}
          value={input}
        />
        <button onClick={fetchShow}>Search</button>
      </div>
    </div>
  );
};

export default Search;
