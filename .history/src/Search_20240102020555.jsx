import React from "react";

const Search = ({ fetchShow, input }) => {
  return (
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
  );
};

export default Search;
