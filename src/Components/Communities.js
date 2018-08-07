import React, { Component } from 'react';
import '../Styling/Communities.css';

class Communities extends Component {
    render() {
        return(
            <div id="communities-container">
                <h1>Communities <hr style={{height: "1px"}} /></h1>
                <div id="communities-wrapper">
                    <span className="community">
                        <img className="content-img" src={require("../grove-img@2x.png")} alt="" align="middle"/>
                        <h4>Coconut Grove</h4>
                        <p>Her his client would minutes.
                             In boss's entire the even what mind influenced was word two is one the was however may lift view. 
                             And people the eyes.</p>
                        <a className="button" href="https://juansuarez.allmiamihousesforsale.com/search/quick?acl_city=Coconut%20Grove%2CFL&maxprice=5000000&minbeds=1&minprice=50000&page=1&perpage=12&soldproperty=0&sortby=highestprice&type=quick" target="_blank">Search Coconut Grove<img src={require("../arrow-right@2x.png")} alt="arrow"/></a>
                    </span>
                    <span className="community">
                        <img className="content-img" src={require("../gables@2x.png")} alt="" align="middle"/>
                        <h4>Coral Gables</h4>
                        <p>Her his client would minutes.
                             In boss's entire the even what mind influenced was word two is one the was however may lift view. 
                             And people the eyes.</p>
                        <a className="button" href="https://juansuarez.allmiamihousesforsale.com/search/quick/PDQVLZZZTRVY1KTPN/homes-for-sale-in-coral-gables" target="_blank">Search Coral Gables<img src={require("../arrow-right@2x.png")} alt="arrow"/></a>
                    </span>
                    <span className="community">
                        <img className="content-img" src={require("../miami-beach@2x.png")} alt="" align="middle"/>
                        <h4>Miami Beach</h4>
                        <p>Her his client would minutes.
                             In boss's entire the even what mind influenced was word two is one the was however may lift view. 
                             And people the eyes.</p>
                        <a className="button" href="https://juansuarez.allmiamihousesforsale.com/search/quick?acl_city=Miami%20Beach%2CFL&maxprice=5000000&minbeds=1&minprice=50000&page=1&perpage=12&soldproperty=0&sortby=highestprice&type=quick" target="_blank">Search Miami Beach<img src={require("../arrow-right@2x.png")} alt="arrow"/></a>
                    </span>
                    <span className="community">
                        <img className="content-img" src={require("../pinecrest@2x.png")} alt="" align="middle"/>
                        <h4>Pinecrest</h4>
                        <p>Her his client would minutes.
                             In boss's entire the even what mind influenced was word two is one the was however may lift view. 
                             And people the eyes.</p>
                        <a className="button" href="https://juansuarez.allmiamihousesforsale.com/search/quick?acl_city=Pinecrest%2CFL&maxprice=5000000&minbeds=1&minprice=50000&page=1&perpage=12&soldproperty=0&sortby=highestprice&type=quick" target="_blank">Search Pinecrest<img src={require("../arrow-right@2x.png")} alt="arrow"/></a>
                    </span>
                    <span className="community">
                        <img className="content-img" src={require("../kendall@2x.png")} alt="" align="middle"/>
                        <h4>Kendall</h4>
                        <p>Her his client would minutes.
                             In boss's entire the even what mind influenced was word two is one the was however may lift view. 
                             And people the eyes.</p>
                        <a className="button" href="https://juansuarez.allmiamihousesforsale.com/search/quick?acl_city=Kendall%2CFL&maxprice=5000000&minbeds=1&minprice=50000&page=1&perpage=12&soldproperty=0&sortby=highestprice&type=quick" target="_blank">Search Kendall<img src={require("../arrow-right@2x.png")} alt="arrow"/></a>
                    </span>
                    <span className="community">
                        <img className="content-img" src={require("../south-miami@2x.png")} alt="" align="middle"/>
                        <h4>South Miami</h4>
                        <p>Her his client would minutes.
                             In boss's entire the even what mind influenced was word two is one the was however may lift view. 
                             And people the eyes.</p>
                        <a className="button" href="https://juansuarez.allmiamihousesforsale.com/search/quick?acl_city=South%20Miami%2CFL&maxprice=5000000&minbeds=1&minprice=50000&page=1&perpage=12&soldproperty=0&sortby=highestprice&type=quick" target="_blank">Search South Miami<img src={require("../arrow-right@2x.png")} alt="arrow"/></a>
                    </span>
                </div>
            </div>
        )
    }
}

export default Communities;