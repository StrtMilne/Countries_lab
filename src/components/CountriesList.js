import React from "react";
import CountryItem from "./CountryItem";

const CountriesList=({countries,onCountryClick, onFavouriteClick})=>{

    const countriesItems=countries.map((country,index)=>{
        return <CountryItem onFavouriteClick={onFavouriteClick} onCountryClick={onCountryClick} country={country} key={index}/>
    })
    return(
        <div>
            <h1>Countries of the world:</h1>
            <ul>
                {countriesItems}
            </ul>
        </div>
)}

export default CountriesList