import React, { Component } from 'react';
import GirlCard from './Components/VolunteerCard/GirlCard';
import DogsCard from './Components/TopBanner/DogsCard';
import TroubleCard from './Components/BottomCard/TroubleCard';
import NavBar from './Components/NavBar/NavBar';
import Testimonial from './Components/TestimonialCard/TestimonialCard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <DogsCard />
      <GirlCard /> <Testimonial />
    </div>
  );
};


export default App;
