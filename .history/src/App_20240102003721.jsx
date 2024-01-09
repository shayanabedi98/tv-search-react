import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState();

  const fetchShow = async () => {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`);
      const responseJson = response.json();
      console.log(responseJson);
    } catch (err) {
      console.log('Oops, something went wrong. ', err);
    }
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={fetchShow}>Search</button>
    </>
  );
}

export default App;