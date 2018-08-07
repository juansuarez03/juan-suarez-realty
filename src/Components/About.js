import React, { Component } from 'react';
import '../Styling/About.css';

class About extends Component {
    render() {
        return(
            <div id="about-container">
                <h1>About Me <hr style={{height: "1px"}} /></h1>
                <div id="about-wrapper">
                    <div id="about-content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p>
                            <img src={require("../phone@2x.png")} alt="" style={{height: '20px', width: '21px', marginRight: '12px'}} /> <a className="contact-link" href="tel:+1-786-609-8208">(786)-609-8208</a><br/><br/>
                            <img src={require("../mail@2x.png")} alt="" style={{height: '16px', width: '20px', marginRight: '12px'}} />  <a className="contact-link" href="mailto:juansuarez.realty@gmail.com">juansuarez.realty@gmail.com</a><br/><br/>
                            <img src={require("../instagram@2x.png")} alt="" style={{height: '20px', width: '20px', marginRight: '12px'}} /> <a className="contact-link" href="https://www.instagram.com/juan____suarez/" target="_blank">@juan____suarez</a><br/><br/>
                        </p>
                    </div>
                    <img id="about-me-img" src={require("../juan-about.png")} alt=""/>
                </div>
            </div>
        )
    }
}

export default About;