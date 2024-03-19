
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './assets/Preloader';
import React, { useState, useEffect } from 'react';
import {Home} from './pages/Home.js';
import {About} from './pages/About.js';
import {Contact} from './pages/Contact.js';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200); // Simulates initial loading time

    // Cleanup function to clear the timer if the component unmounts before the timer fires
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Preloader />}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home setIsLoading={setIsLoading} />} />
          <Route path="/home" element={<Home setIsLoading={setIsLoading} />} />
          <Route path="/about" element={<About setIsLoading={setIsLoading} />} />
          <Route path="/contact" element={<Contact setIsLoading={setIsLoading} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;