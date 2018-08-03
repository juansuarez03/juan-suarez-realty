import React, { Component } from 'react';
import '../Styling/Services.css';

class Services extends Component {
    render() {
        return(
            <div className="services-section">
                <h1 id="h1-services">Services</h1>
                <div className="services">
                    <span className="service">
                        <img id="service-img" src={require("../buy-image@2x.png")} alt="buy-image"/>
                        <div className="service-content">
                            <h4>Buy</h4>
                            <p id="service-paragraph">Her his client would minutes. 
                                In boss's entire the even what mind influenced was word two is one the was however may lift view. 
                                And people the eyes.</p>
                            <a href="" target="_blank">Let's Buy <img src={require("../arrow-right@2x.png")} alt=""/></a>
                        </div>
                    </span>
                    <span className="service">
                        <img id="service-img" src={require("../sell-image@2x.png")} alt="sell-image"/>
                        <div className="service-content">
                            <h4>Sell</h4>
                            <p id="service-paragraph">Her his client would minutes. 
                                In boss's entire the even what mind influenced was word two is one the was however may lift view. 
                                And people the eyes.</p>
                            <a href="" target="_blank">Let's Sell <img src={require("../arrow-right@2x.png")} alt=""/></a>
                        </div>
                    </span>
                    <span className="service">
                        <img id="service-img" src={require("../lease-image@2x.png")} alt="lease-image"/>
                        <div className="service-content">
                            <h4>Lease</h4>
                            <p id="service-paragraph">Her his client would minutes. 
                                In boss's entire the even what mind influenced was word two is one the was however may lift view. 
                                And people the eyes.</p>
                            <a href="" target="_blank">Let's Lease <img src={require("../arrow-right@2x.png")} alt=""/></a>
                        </div>
                    </span>
                </div>
            </div>
        )
    }
}

export default Services;