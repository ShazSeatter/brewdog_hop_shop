import React, {useState} from "react";


const AddToFavoritesButton = function ({beer, onAddToFavorites}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = () => {
    setIsFavorite(true);
    onAddToFavorites(beer.name)
  }
    return (
        <>
        <button onClick={handleAddToFavorites}>{isFavorite ? 'Added to Favorites' : 'Add to Favorites'}</button>
        </>
    )
}

export default AddToFavoritesButton; 