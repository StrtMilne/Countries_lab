import React from "react";

const FavouritesItem = ({favourite, onCountryClick}) => {

    const handleClick=function() {
        onCountryClick(favourite);
    }
    return(
        
        <li onClick={handleClick}>{favourite.name.common}</li>
    )
}

export default FavouritesItem;