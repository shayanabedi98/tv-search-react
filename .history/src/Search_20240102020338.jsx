import React from "react";

const Search = () => {
  return (
    <div>
      <input
        required
        type="text"
        onKeyDown={(e) => e.key === "Enter" && fetchShow()}
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={fetchShow}>Search</button>
      <List showList={showList} />
    </div>
  );
};

export default Search;
