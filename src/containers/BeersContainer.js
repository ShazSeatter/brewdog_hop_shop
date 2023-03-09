import React, {useEffect, useState} from "react";
import BeersList from "../components/BeersList";
import BeerDetail from "../components/BeerDetail";

const BeersContainer = function () {
    // useState
    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);


    // useEffect - initall set-up
    useEffect(() => {
        getBeers(); // array of 80 objects
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
    }
    return (
        <>
        <h1>BrewDog's HopShop</h1>
        <BeersList beers={beers} onBeerClicked={onBeerClicked}/>
        {selectedBeer ? <BeerDetail beer={selectedBeer}/> : null}
        </>
    )
}
 

export default BeersContainer; 