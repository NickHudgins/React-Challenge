import React, { Component } from 'react';
import GirlCard from './GirlCard';
import DogsCard from './Components/TopBanner/DogsCard';
import TroubleCard from './TroubleCard';
import NavBar from './Components/NavBar/NavBar';
import Testimonial from './TestimonialCard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <DogsCard />
      {Testimonial}
      {TroubleCard}
    </div>
  );
};


export default App;
