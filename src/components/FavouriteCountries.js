import React from "react";
import FavouritesItem from "./FavouritesItem";

const FavouriteCountries = ({favourites, onCountryClick}) => {

    const favouritesItems = favourites.map((favourite, index) => {
        return <FavouritesItem onCountryClick={onCountryClick} favourite={favourite} key={index} />
    })
    
    return(
        <div>
            <h1>Favourites</h1>
            <ul>
                {favouritesItems}
            </ul>
        </div>
    )
}

export default FavouriteCountries;