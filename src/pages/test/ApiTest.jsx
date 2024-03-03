import React, { useState, useEffect } from "react";

export default function ApiTest() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => res.json())
      .then((data) => setApiData(data.data));
  }, [])
  return (
    <div>
      {apiData.map((data) => (
        <div key={data.mal_id}>
          <h1>{data.title}</h1>
          <img src={data.images.jpg.image_url} alt="" />
          <p>{data.synopsis}</p>
          <p>{data.score}</p>
          <p>{data.status}</p>
        </div>
      ))}
    </div>
  );
}
