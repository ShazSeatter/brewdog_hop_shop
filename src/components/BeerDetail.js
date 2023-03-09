import React from "react";

const BeerDetail = function({beer}) {

    const beerIngredientsMalt = beer.ingredients.malt.map((ingredient, index) => {
        return <li key={index}>{ingredient.name} {ingredient.amount.value}</li>

    })

    const beerIngredientsHops = beer.ingredients.hops.map((ingredient, index) => {
        return <li key={index}>{ingredient.name} {ingredient.amount.value}</li>

    })


    return (
        <div>
            <img src={beer.image_url} alt="" />
            <ul>
            <p>Ingredients for {beer.name}</p>
            Malt:{beerIngredientsMalt}
            <br/>
            Hops:{beerIngredientsHops}
            <br/>
            <li>Yeast: {beer.ingredients.yeast}</li>
            </ul>
   
            <p>Brewer's tips if you're interested...</p>
            <p>{beer.brewers_tips}</p>
        </div>
    )
}

export default BeerDetail;