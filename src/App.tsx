// pages, components
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Home from 'pages/Home/Home';

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
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;