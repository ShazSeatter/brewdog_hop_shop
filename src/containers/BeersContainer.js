import React, {useEffect, useState} from "react";
import BeersList from "../components/BeersList";

const BeersContainer = function () {
    // useState
    const [beer, setBeers] = useState([]);


    // useEffect - initall set-up
    useEffect(() => {
        getBeers(); // array of 80 
    }, []);

    // API call to get data for useEffect to use
    const getBeers = async function() {
        const response = await fetch('https://api.punkapi.com/v2/beers?page=2&per_page=80')
        const beers = await response.json();
        setBeers(beers)
        console.log(beers)
    }

    return (
        <>
        <h1>BrewDog's HopShop</h1>
        <BeersList beers={beers}/>
        </>
    )
}
 

export default BeersContainer; 