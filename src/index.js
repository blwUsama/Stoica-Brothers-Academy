import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import MainPage from './MainPage'
import Footer from './Footer'




function App()
{
 return (
    <div>
      <Navbar />

      <MainPage />

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
