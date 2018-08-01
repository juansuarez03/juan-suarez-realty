import React, { Component } from 'react';
import '../Styling/Why.css';

class Why extends Component {
    render() {
        return(
            <div className="Why">
                <div className="body">
                    <h1>Why</h1>
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. 
                        Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. 
                        Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        Bring to the table win-win survival strategies to ensure proactive domination. 
                        At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. 
                        User generated content in real-time will have multiple touchpoints for offshoring.
                    </p>
                </div>
                <img src={require("../tyler-nix-490500-unsplash@2x.png")} alt="Juan-Ugly" />
                <div className="gold-block">
                    <div className="stat-wrapper">
                        <div className="stat">
                            <span id="stat-number">2.3</span>
                            <span id="stat-text">million in sales last year</span>
                        </div>
                        <div className="stat">
                            <span id="stat-number">24</span>
                            <span id="stat-text">happy clients</span>
                        </div>
                        <div className="stat">
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