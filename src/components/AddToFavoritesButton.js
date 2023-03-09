import React, {useState} from "react";


const AddToFavoritesButton = function ({beer, onAddToFavorites, onRemoveFromFavorites, favorites}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = () => {
    if (!favorites.includes(beer.name)) {
    setIsFavorite(true);
    onAddToFavorites(beer.name)
    } else {
      setIsFavorite(false);
      onRemoveFromFavorites(beer.name)
    }

  }
    return (
        <>
        <button onClick={handleAddToFavorites}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
        </>
    )
}

export default AddToFavoritesButton; 