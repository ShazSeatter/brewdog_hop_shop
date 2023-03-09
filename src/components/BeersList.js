import React from "react";
import BeerItem from "./BeerItem";

const BeersList = function ({beers, onBeerClicked}) {
    const beerItems = beers.map((beer, index) => {
        return <BeerItem key={beer.id} beer={beer} index={index} onBeerClicked={onBeerClicked}/>

    })
 
    return (
        <>
        <h2>This is the BeersList</h2>
        {beerItems}
        </>
    )
}

export default BeersList; 