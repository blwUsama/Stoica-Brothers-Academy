import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Navbar from './Navbar';
import MainPage from './MainPage';
import About from './About';
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
