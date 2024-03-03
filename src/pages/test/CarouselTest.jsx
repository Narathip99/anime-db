import React, { useState } from 'react'
import { useAnimeContext } from "@/context/animeContext";

export const CarouselTest = () => {
  return (
    <div>
      <h1>Carousel Testing</h1>
      <CarouselKub />
    </div>
  )

  function CarouselKub () {
    const { topAiring } = useAnimeContext();
    const [ currentIndex, setCurrentIndex ] = useState(0);
  
    const showItem = (index) => {
      setCurrentIndex(index);
    }
    const nextItem = () => {
      setCurrentIndex((currentIndex +1) % topAiring.length);
    }
    const prevItem = () => {
      setCurrentIndex((currentIndex - 1 + topAiring.length) % topAiring.length);
    }

    return (
      <div className="container bg-gray-300">
          {topAiring.map((item, index) => (
            <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            <div key={index} className="item-card">
              <h3>{item.title}</h3>
            </div>
            </div>
          ))}
        <button className="prev-button" onClick={prevItem}>❮</button>
        <button className="next-button" onClick={nextItem}>❯</button>
      </div>
    );
  }
}