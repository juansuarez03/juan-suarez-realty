import React, { Component } from 'react';
import './Styling/App.css';
import Hero from './Components/Hero.js';
import Why from './Components/Why.js';
import Services from './Components/Services.js';
import SearchDivider from './Components/SearchDivider.js';
import Communities from './Components/Communities.js';
import About from './Components/About.js'
var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Element name="why"><Why /></Element>
        <Element name="services"><Services /></Element>
        <SearchDivider />
        <Element name="communities"><Communities /></Element>
        <Element name="about"><About /></Element>
      </div>
    );
  }
}

export default App;
