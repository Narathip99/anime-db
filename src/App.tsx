// pages, components
import AnimeCard from 'components/AnimeCard/AnimeCard';
import Header from 'components/Header/Header';
import Home from 'pages/Home/Home';
import Test from 'pages/__test__/Test';
import MyComponent from 'pages/__test__/TestAPI';

//
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [ theme, setTheme ] = useState('light');
  
  return (
    <div className={theme}>
      <BrowserRouter>
        <Header theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/test-api" element={<MyComponent />} />

          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;