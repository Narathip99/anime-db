import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Test() {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/seasons/now').then(res => {
      return res.json();
    }).then(resJson => {
      console.log(resJson);
      setAnime(resJson.data);
    });
  }, []);

  return (
    <main>
      <div className="container mx-auto pb-20">
        <div className='grid grid-cols-5 gap-6'>
          {anime.map(anime => {
            return (
              <div className="anime-card mx-auto flex justify-center mt-20">
                <Link to='#' className='max-w-xs px-4 py-4 bg-gray-100 hover:rounded-sm hover:bg-blue-500'>
                  <img src={anime.images.jpg.large_image_url}
                    alt="" className="w-96" />
                  <h2 className='text-xl font-semibold my-4'>
                    {anime.title}
                  </h2>
                  <p className=''>
                    Status: {anime.status}  |   Episodes: {anime.episodes}
                    <br />
                    Aired: {anime.aired.string}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}