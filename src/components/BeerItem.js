import React from "react";

const BeerItem = function ({beer, onBeerClicked}) {

    const handleClick = function () {
        onBeerClicked(beer)
    }

    return (
        <>
        <h3 onClick={handleClick}>{beer.name}</h3>
        </>
    )
}

export default BeerItem; 