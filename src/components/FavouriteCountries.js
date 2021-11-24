import React from "react";
import FavouritesItem from "./FavouritesItem";

const FavouriteCountries = ({favourites, onCountryClick}) => {

    const favouritesItems = favourites.map((favourite, index) => {
        return <FavouritesItem onCountryClick={onCountryClick} favourite={favourite} key={index} />
    })
    
    return(
        <div>
            <ul>
                {favouritesItems}
            </ul>
        </div>
    )
}

export default FavouriteCountries;