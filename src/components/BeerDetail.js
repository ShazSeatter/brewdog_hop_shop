import React from "react";

const BeerDetail = function({beer}) {
    return (
        <div>
            <p>{beer.description}</p>
        </div>
    )
}
export default BeerDetail; 