import React, { Component } from 'react';
import GirlCard from './GirlCard';
import DogsCard from './DogsCard';
import TroubleCard from './TroubleCard';
import NavBar from './Components/NavBar';
import Testimonial from './TestimonialCard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <DogsCard /> */}
      <NavBar />
      {GirlCard}
      {Testimonial}
      {TroubleCard}
    </div>
  );
};


export default App;
