import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function TestAPI() {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/seasons/upcoming').then(res => {
      return res.json();
    }).then(resJson => {
      console.log(resJson);
      setAnime(resJson.data);
    });
  }, []);

  return (
    <div>
      <h1 className='text-2xl font-medium py-4 text-center'>Test API</h1>
      {anime.map(anime => {
        return (
          <div key={anime.mal_id}>
            <p>{anime.mal_id}</p>
            <p>{anime.title}</p>
            <img src={anime.images.jpg.large_image_url} alt="" />
          </div>
        );
      })}
    </div>
  );
}