import React, { memo } from "react";

// using memo to avoid re-render
export const TopAiringCard = memo(({ data, rank }) => {
  // Cut words
  const titleCut = (title) => {
    if (title.length > 35) {
      return title.slice(0, 35) + "...";
    } else {
      return title;
    }
  }
  return (
    <div className="bg-red-300">
      <img
        src={data.images.jpg.image_url}
        alt={data.title}
        className="w-[190px] h-[266px] object-cover"
      />
      <p>{titleCut(data.title)}</p>
      <p>Rank : {rank}</p>
      <p>Score : {data.score}</p>
      <p>Scored by : {data.scored_by}</p>
    </div>
  );
});
