import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState();
  const [showList, setShowList] = useState([{
    name: "",
    img: "",
    summary: "",
    rating: "",
  }]);

  const fetchShow = async () => {
    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${input}`
      );
      const responseJson = await response.json();
      responseJson.map((show) => {
        setShowList([
          ...showList,
          {
            name: show.show.name,
            img: show.show.image.medium,
            summary: "",
            rating: show.show.rating.average,
          },
        ]);
      });
      console.log(responseJson)
    } catch (err) {
      console.log("Oops, something went wrong. ", err);
    }
  };

  return (
    <>
      <input
        type="text"
        onKeyDown={(e) => e.key === "Enter" && fetchShow()}
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={fetchShow}>Search</button>
      <ul>
        {showList.map((show) => {
          return (
            <h1>show.name</h1>
          )
        })}
      </ul>
    </>
  );
}

export default App;
