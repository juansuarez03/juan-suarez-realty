import React, { Component } from 'react';
import '../Styling/Lander.css';
var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;
var scroll = Scroll.animateScroll;

class Lander extends Component {

    constructor(props) {
        super(props);

        this.scrollToElement.bind(this);
    }

    scrollToElement(e) {

        // Somewhere else, even another file
        scroller.scrollTo(e, {
            duration: 700,
            delay: 100,
            smooth: true,
        })
    }

    render() {
        return(
            <div className="hero">
                <div className="nav">
                    <a className="nav-button" href="#Why" onClick={() => this.scrollToElement('why')}>Why</a>
                    <a className="nav-button" href="#Services" onClick={() => this.scrollToElement('services')}>Services</a>
                    <a className="nav-button" href="#Communities" onClick={() => this.scrollToElement('communities')}>Communities</a>
                    <a className="nav-button" href="#About" onClick={() => this.scrollToElement('about')}>About</a>
                </div>
                <div className="title">Juan <span style={{color: '#B09A50'}}>knows</span> South Florida <br/> 
                    <span style={{color: '#B09A50'}}>Luxury</span> Real Estate <br/> 
                    <div className="contact-info">
                        <a className="contact-link" href="mailto:juansuarez.realty@gmail.com">juansuarez.realty@gmail.com</a>
                        <a className="contact-link" href="tel:+1-786-609-8208">(786)-609-8208</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lander;
