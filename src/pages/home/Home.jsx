import React from "react";

// Components
import { TopAiring } from "./TopAiring";

export default function Home() {
  return (
    <div className="container mx-auto max-w-full 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-6xl 2xl:px-[100px] lg:px-[30px] px-[20px]">
      <h1>Top Airing</h1>
      <TopAiring />
    </div>
  );
}
