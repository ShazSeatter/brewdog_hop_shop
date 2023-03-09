import React, {useEffect, useState} from "react";
import BeersList from "../components/BeersList";
// import BeerDetail from "../components/BeerDetail";
// import AddToFavoritesButton from "../components/AddToFavoritesButton";


const BeersContainer = function () {
    // useState
    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);
    const [favorites, setFavorites] = useState([]);
   
    // const [favorite, setFavorite] = useState("false");


    // useEffect - initall set-up
    useEffect(() => {
        getBeers(); // array of 40 objects
    }, []);

    // API call to get data for useEffect to use
    const getBeers = async function() {
        const response = await fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=40`)
        const beers = await response.json();
        setBeers(beers)
        console.log(beers)
    }

    const onBeerClicked = function(beer) {
        setSelectedBeer(beer)
        console.log(beer)
    }

    const handleAddToFavorites = (favorite) => {
        if(!favorites.includes(favorite)) {
            setFavorites([...favorites, favorite])
        }

    };

    const handleRemoveFromFavorites = (favorite) => {
        const updatedFavorites = favorites.filter((item) => item !== favorite)
        setFavorites(updatedFavorites)
    }
    return (
        <>
        <h1>BrewDog's HopShop</h1>
        <h3>Favorites List:</h3>
         <ul>
            {favorites.map((favorite, index) =>
                <li key={index}>{favorite}
                <button onClick={() => handleRemoveFromFavorites(favorite)}>
                    Remove from Favorites
                </button>
                </li>
            )}
        </ul>
         <BeersList beers={beers} onBeerClicked={onBeerClicked} selectedBeer={selectedBeer} handleAddToFavorites={handleAddToFavorites} handleRemoveFromFavorites={handleRemoveFromFavorites} favorites={favorites}/>


        {/* {selectedBeer ? <BeerDetail beer={selectedBeer}/> : null} */}
        </>
    )
}

export default BeersContainer; 