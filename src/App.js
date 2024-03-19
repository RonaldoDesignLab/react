
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home.js';
import {About} from './pages/About.js';
import {Contact} from './pages/Contact.js';


const App = () =>{
  return(
    <>
    <BrowserRouter>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
        </>
  );
};

export default App;
