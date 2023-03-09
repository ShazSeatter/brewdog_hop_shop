import React from "react";
import BeerItem from "./BeerItem";
import BeerDetail from "./BeerDetail";


const BeersList = function ({beers, onBeerClicked, selectedBeer, handleAddToFavorites, handleRemoveFromFavorites, favorites}) {

    const beerItems = beers.map((beer, index) => {
        return <BeerItem key={beer.id} beer={beer} index={index} onBeerClicked={onBeerClicked} handleAddToFavorites={handleAddToFavorites} handleRemoveFromFavorites={handleRemoveFromFavorites} favorites={favorites}/>

    })



    return (
        <>
        <h2>Beers</h2>
            {selectedBeer ? <BeerDetail beer={selectedBeer}/> : null}

        <div className="beer-list-container">
        <ul>
            {beerItems}
        </ul>

        </div>
        </>
    )
}

export default BeersList;