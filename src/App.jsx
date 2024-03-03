import React from "react";
import { Outlet } from "react-router-dom";
// Context Provider
import { AnimeContextProvider } from "@/context/animeContext";
// Pages, Components
import { Navbar } from "./components/navbar/Navbar";

export default function App() {
  return (
    <AnimeContextProvider>
      <div className="min-vh-100">
        <Navbar />
        <Outlet />
      </div>
    </AnimeContextProvider>
  );
}