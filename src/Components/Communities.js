import React, { Component } from 'react';
import '../Styling/Communities.css';

class Communities extends Component {
    render() {
        return(
            <div className="communities-section">
                <h1>Communities</h1>
                <div className="communities-wrapper">
                    <span className="community">
                        <img src={require("../grove-img@2x.png")} alt="" align="middle"/>
                        <h4>Coconut Grove</h4>
                        <p>Her his client would minutes.
                             In boss's entire the even what mind influenced was word two is one the was however may lift view. 
                             And people the eyes.</p>
                        <a href="">Search Coconut Grove<img src={require("../arrow-right@2x.png")} alt="arrow"/></a>
                    </span>
                    <span className="community">
                        <img src={require("../gables@2x.png")} alt="" align="middle"/>
                        <h4>Coral Gables</h4>
                        <p>Her his client would minutes.
                             In boss's entire the even what mind influenced was word two is one the was however may lift view. 
                             And people the eyes.</p>
                        <a href="">Search Coral Gables<img src={require("../arrow-right@2x.png")} alt="arrow"/></a>
                    </span>
                    <span className="community">
                        <img src={require("../miami-beach@2x.png")} alt="" align="middle"/>
                        <h4>Miami Beach</h4>
                        <p>Her his client would minutes.
                             In boss's entire the even what mind influenced was word two is one the was however may lift view. 
                             And people the eyes.</p>
                        <a href="">Search Miami Beach<img src={require("../arrow-right@2x.png")} alt="arrow"/></a>
                    </span>
                    <span className="community">
                        <img src={require("../pinecrest@2x.png")} alt="" align="middle"/>
                        <h4>Pinecrest</h4>
                        <p>Her his client would minutes.
                             In boss's entire the even what mind influenced was word two is one the was however may lift view. 
                             And people the eyes.</p>
                        <a href="">Search Pinecrest<img src={require("../arrow-right@2x.png")} alt="arrow"/></a>
                    </span>
                    <span className="community">
                        <img src={require("../kendall@2x.png")} alt="" align="middle"/>
                        <h4>Kendall</h4>
                        <p>Her his client would minutes.
                             In boss's entire the even what mind influenced was word two is one the was however may lift view. 
                             And people the eyes.</p>
                        <a href="">Search Kendall<img src={require("../arrow-right@2x.png")} alt="arrow"/></a>
                    </span>
                    <span className="community">
                        <img src={require("../south-miami@2x.png")} alt="" align="middle"/>
                        <h4>South Miami</h4>
                        <p>Her his client would minutes.
                             In boss's entire the even what mind influenced was word two is one the was however may lift view. 
                             And people the eyes.</p>
                        <a href="">Search South Miami<img src={require("../arrow-right@2x.png")} alt="arrow"/></a>
                    </span>
                </div>
            </div>
        )
    }
}

export default Communities;