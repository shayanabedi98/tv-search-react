import React from "react";

const List = ({ showList }) => {
  return (
    <div className="list-container">
        <h2>Results</h2>
      <div className="list">
        {showList.length > 0 &&
          showList.map((show) => {
            return (
              <div className="card" key={show.id}>
                <h2>{show.name}</h2>
                <img src={show.img} alt={`cover photo of ${show.name}`} />
                <p>
                  <span>Language: </span>
                  {show.language}
                </p>
                <p>
                  {show.rating ? `Rating: ${show.rating}⭐` : "Rating: N/A"}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default List;
