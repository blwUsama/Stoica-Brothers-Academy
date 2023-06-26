import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import MainPage from './MainPage';
import About from './About';
import Preturi from './Preturi';
import Program from './Program';
import Navbar from './Navbar';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App()
{
 return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/preturi" element={<Preturi/>}/>
          <Route path="/program" element={<Program/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
);
