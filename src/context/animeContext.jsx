import React, { createContext, useContext, useState, useEffect } from "react";

// API Url
const baseUrl = "https://api.jikan.moe/v4";

const AnimeContext = createContext();

// Context Provider Start
export const AnimeContextProvider = ({ children }) => {
  const [topAiring, setTopAiring] = useState([]);

  useEffect(() => {
    const fetchTopAiring = async () => {
      try {
        const res = await fetch(`${baseUrl}/top/anime?filter=airing`);
        // err
        if (!res.ok) {
          throw new Error("Failed to fetch top anime");
        }
        // res json to data
        const data = await res.json();
        // limit data
        const limitedData = data.data.slice(0, 10);
        // update state
        setTopAiring(limitedData);
      } catch (error) {
        console.log(error);
      }
    }
    // use func fetch
    fetchTopAiring();
  }, []); // useEffect only run once when component mounted

  return (
    <AnimeContext.Provider
      value={{
        topAiring,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
// Context Provider End

export const useAnimeContext = () => useContext(AnimeContext);