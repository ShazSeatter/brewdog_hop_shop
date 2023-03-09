import React from "react";
import BeerDetail from "./BeerDetail";
import AddToFavoritesButton from "../components/AddToFavoritesButton";


const BeerItem = function ({beer, onBeerClicked, selectedBeer, handleAddToFavorites, handleRemoveFromFavorites, favorites}) {
    


    const handleClick = function () {
        onBeerClicked(beer)
    }

    console.log(selectedBeer)

    // const handleAddToFavorites = function() {
    //     setFavorites([...favorites, favorite])
    //   }
    return (
        <>
        <div className="beer-card">
        <li>
        <h3 className="click-title" onClick={handleClick}>{beer.name}</h3>
        <p>{beer.description}</p>
        {selectedBeer ? <BeerDetail beer={selectedBeer}/> : null}
        {/* <ul>
            {favorites.map((favorite, index) => 
           <li key={index}>{favorite}</li>
            )}
        </ul> */}
          <AddToFavoritesButton beer={beer} onAddToFavorites={handleAddToFavorites} onRemoveFromFavorites={handleRemoveFromFavorites} favorites={favorites}/>
        </li>
        </div>
        </>
    )
}

export default BeerItem;