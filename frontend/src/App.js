// from react
import React from 'react';


// about project
import './App.css';
import Navbar from './assets/layout/Navbar';
import developer from './assets/imgs/developer-activity-animate.svg'


function App() {
  return (
    <>
      <Navbar/>
        <section className='seeMore'>
          <h1>Ola eu sou <span>Rafael Lasso!</span></h1>
          <img className='developer' src={developer}/>
        </section>
    </>
  );
}

export default App;
