import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function AnimeCard() {
  const [anime, setAnime] = useState([]);

  // set anime type
  interface Anime {
    images: {
      jpg: {
        large_image_url: string
      }
    }
    title: string
    status: string
    episodes: number
    aired: {
      string: string
    }
  }

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/seasons/now').then(res => {
      return res.json();
    }).then(resJson => {
      console.log(resJson);
      setAnime(resJson.data);
    });
  }, []);

  return (
    <>
      {anime.map((anime: Anime) => {
        return (
          <div className="anime-card mx-auto flex justify-center mt-20">
            <Link to='#' className={'max-w-xs px-4 py-4 bg-gray-100 hover:rounded-sm hover:bg-blue-500'}>
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
    </>
  );
}