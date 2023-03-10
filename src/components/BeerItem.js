import React from "react";

import AddToFavoritesButton from "../components/AddToFavoritesButton";


const BeerItem = function ({beer, onBeerClicked, selectedBeer, handleAddToFavorites, handleRemoveFromFavorites, favorites}) {
    
    const handleClick = function () {
        onBeerClicked(beer)
    }

    console.log(selectedBeer)

    return (
        <>
        <div className="beer-card">
        <li>
        <h3 className="click-title" onClick={handleClick}>{beer.name}</h3>
        <p>{beer.description}</p>
          <AddToFavoritesButton beer={beer} onAddToFavorites={handleAddToFavorites} onRemoveFromFavorites={handleRemoveFromFavorites} favorites={favorites}/>
        </li>
        </div>
        </>
    )
}

export default BeerItem;