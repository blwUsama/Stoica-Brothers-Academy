import React from 'react';
import ReactDOM from 'react-dom';
import leftFigure from './images/left-figure.png'
import rightFigure from './images/right-figure.png'
import './index.css';
import Navbar from './Navbar';
import training4 from './images/training4.jpg'
import training2 from './images/training2.jpg'
import training7 from './images/training7.jpg'


function App()
{
 return (
    <div>
      <Navbar />

      <div className="content">
        <div className="figures-section-flexbox">
          <img className="left-figure" src={leftFigure} />
          <div className='between-figures-container'>
            <h4> ANTRENEAZA-TE CU CAMPIONII </h4>
            <h1> PENTRU A DEVENI CAMPION </h1>
            <button className='button-join'> <b> DEVINO MEMBRU </b></button>
            {/* <div className="buttons-container">
              <button className="button-join"> <b> DEVINO MEMBRU </b></button>
              <button className="button-about"> <b> AFLA MAI MULTE </b></button>
            </div> */}
          </div>
          <img className="right-figure" src={rightFigure} />

        </div>
      </div>

      <div className="row">
        <div className='image-container'>
          <img src={training4} />
          <div className='fade2R'></div>
        </div>
        <div className="text">
         <h2> Antrenamente pentru toate varstele </h2>
         <p> Te asteptam la antrenamente indiferent de varsta sau experienta</p>
        </div>
      </div>

      <div className="row" style={{flexDirection: 'row-reverse'}}>
        <div className='image-container'>
          <img src={training2} />
          <div className='fade2L'></div>
        </div>
        <div className="text">
          <h2> Alege arta martiala care ti se potriveste </h2>
          <p> Avem o gama variata de arte martiale si antrenori capabili sa iti descopere potentialul </p>
        </div>
      </div>

      <div className="row">
        <div className='image-container'>
          <img src={training7} />
          <div className='fade2R'></div>
        </div>
        <div className="text">
          <h2> Gaseste-ti disciplina </h2>
          <p> chit ca alegi sa faci ca hobby sau de performanta, venitul la antrenament iti va dezvolta un simt al disciplinii de care vei putea beneficia si in alte aspecte ale vietii </p>
        </div>
      </div>

    </div>
  );
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
);
