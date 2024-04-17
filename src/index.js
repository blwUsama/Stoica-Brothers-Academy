import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import MainPage from './MainPage';
import About from './About';
import Antrenamente from './Antrenamente';
import Antrenori from './Antrenori';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// this function was created because when a user would switch pages 
// the page would stay scrolled down which led to bad user experience,
// it scrolls back to the top of the page whenever the url location changes
function ScrollToTop() {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  return null;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route ac path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/antrenamente" element={<Antrenamente />} />
          <Route path="/antrenori" element={<Antrenori />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <ScrollToTop />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />)