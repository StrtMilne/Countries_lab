import React from "react";
import './ListItem.css';

const CountryItem=({country, onCountryClick, onFavouriteClick})=>{

const handleClick=function(){
    onCountryClick(country)
}

const handleFavouriteClick=function() {
    onFavouriteClick(country)
}
    return(
    <>
        <li onClick={handleClick}><b>{country.name.common}</b>, Population: {country.population}</li>
        <button value={country} onClick={handleFavouriteClick}> Add to favorite</button>
    </>
    )
}

export default CountryItem