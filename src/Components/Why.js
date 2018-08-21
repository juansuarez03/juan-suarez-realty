import React, { Component } from 'react';
import '../Styling/Why.css';

class Why extends Component {
    render() {
        return(
            <div id="why-container">
                <h1>Why <hr style={{height: "1px"}} /></h1>
                <p id="why-paragraph">In Miami it is hard to find a dependable Real Estate Agent. 
                Many Realtors do not answer the phone, do not respond promptly, and are simply not the best negotiators. 
                I am a young motivated professional that can assure you transparent communication and determined commitment. 
                I am passionate about helping you achieve your property goals. I was raised in Miami my whole life. 
                This provides me with a strong understanding of it's culture and neighborhoods.
                </p>
                <img id="why-image" src={require("../juan.png")} alt="Juan-Ugly" />
                <div id="stats-container">
                    <div id="stats-wrapper">
                        <div id="stat">
                            <span id="stat-number">2.3</span>
                            <span id="stat-text">million in sales last year</span>
                        </div>
                        <div id="stat">
                            <span id="stat-number">24</span>
                            <span id="stat-text">happy clients</span>
                        </div>
                        <div id="stat">
                            <span id="stat-number">3</span>
                            <span id="stat-text">years experience</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Why;