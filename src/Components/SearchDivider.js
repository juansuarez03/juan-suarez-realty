import React, { Component } from 'react';
import '../Styling/SearchDivider.css';

class SearchDivider extends Component {
    render() {
        return(
            <div className="SearchDivider">
                <a id="searchbar-link" href="https://juansuarez.allmiamihousesforsale.com/" target="_blank"><img id="searchbar-image" src={require("../search-button@2x.png")} alt=""/></a>
            </div>
        )
    }
}

export default SearchDivider;