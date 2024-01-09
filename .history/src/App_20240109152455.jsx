import { useState } from "react";
import { v4 as uuid } from "uuid";
import List from "./List";
import Search from "./Search";

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
              genres: responseJson[i].show.genres.join(', '),
              language: responseJson[i].show.language,
              rating: responseJson[i].show.rating.average,
            });
          }
        }
        setShowList(newList);
        console.log(responseJson);
      }
    } catch (err) {
      return err;
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="bg">
      <Search fetchShow={fetchShow} input={input} handleChange={handleChange} />
      <List showList={showList} />
    </div>
  );
}

export default App;
