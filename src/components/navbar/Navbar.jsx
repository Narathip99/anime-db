import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex w-full bg-red-400 py-4">
      <div
        className="
          flex items-center justify-between
          container mx-auto 
          max-w-full
          2xl:max-w-screen-2xl 2xl:px-[100px]
          xl:max-w-screen-xl
          lg:max-w-6xl lg:px-[30px]
          px-[20px]"
      >
        <h2>AnimeDB</h2>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};
