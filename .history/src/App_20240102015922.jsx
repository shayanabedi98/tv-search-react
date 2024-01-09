import { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";

function App() {
  const [input, setInput] = useState();
  const [showList, setShowList] = useState([]);

  const fetchShow = async () => {
    try {
      if (input) {
        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${input}`
        );
        const responseJson = await response.json();
        let newList = [];
        for (let i = 0; i < responseJson.length; i++) {
          if (responseJson[i].show.image) {
            newList.push({
              id: uuid(),
              name: responseJson[i].show.name,
              img: responseJson[i].show.image.medium,
              language: responseJson[i].show.language,
              rating: responseJson[i].show.rating.average,
            });
          }
        }
        setShowList(newList);
        console.log(responseJson);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <input
      required
        type="text"
        onKeyDown={(e) => e.key === "Enter" && fetchShow()}
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={fetchShow}>Search</button>
      <div>
        {showList.length > 0 && (
          showList.map((show) => {
            return (
              <div key={show.id}>
                <h2>{show.name}</h2>
                <img src={show.img} alt={`cover photo of ${show.name}`} />
                <p><span>Language: </span>{show.language}</p>
                <p>{show.rating ? `Rating: ${show.rating} ⭐` : 'N/A'}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default App;
