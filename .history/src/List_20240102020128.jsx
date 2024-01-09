import React from "react";

const List = () => {
  return (
    <div className="list">
      {showList.length > 0 &&
        showList.map((show) => {
          return (
            <div key={show.id}>
              <h2>{show.name}</h2>
              <img src={show.img} alt={`cover photo of ${show.name}`} />
              <p>
                <span>Language: </span>
                {show.language}
              </p>
              <p>{show.rating ? `Rating: ${show.rating}⭐` : "Rating: N/A"}</p>
            </div>
          );
        })}
    </div>
  );
};

export default List;
