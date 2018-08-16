import React, { Component } from 'react';
import '../Styling/Services.css';

class Services extends Component {
    render() {
        return(
            <div id="services-container">
                <h1>Services <hr style={{height: "1px"}} /></h1>
                <div id="services">
                    <span className="service">
                        <img className="content-img" src={require("../buy-image@2x.png")} alt="buy-image"/>
                        <h4>Buy</h4>
                        <p id="service-paragraph">Whether you are looking to become a new home owner or are an interested investor, I can help you. Hit the button below to get started.</p>
                        <a className="button" href="" target="_blank">Let's Buy <img src={require("../arrow-right@2x.png")} alt=""/></a>
                    </span>
                    <span className="service">
                        <img className="content-img" src={require("../sell-image@2x.png")} alt="sell-image"/>
                        <h4>Sell</h4>
                        <p id="service-paragraph">I focus on speed and communication when selling properties. I help bring out your properties full potential value. Let's get started below.</p>
                        <a className="button" href="" target="_blank">Let's Sell <img src={require("../arrow-right@2x.png")} alt=""/></a>
                    </span>
                    <span className="service">
                        <img className="content-img" src={require("../lease-image@2x.png")} alt="lease-image"/>
                        <h4>Lease</h4>
                        <p id="service-paragraph">If you are looking to safely and profitably lease your property for extra cash flow, then click below to get started right away.</p>
                        <a className="button" href="" target="_blank">Let's Lease <img src={require("../arrow-right@2x.png")} alt=""/></a>
                    </span>
                </div>
            </div>
        )
    }
}

export default Services;