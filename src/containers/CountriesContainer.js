import React ,{useState,useEffect}from "react";
import CountriesList from "../components/CountriesList";
import CountryDetail from "../components/CountryDetail";
import FavouriteCountries from "../components/FavouriteCountries";
// import './CountryContainer.css';


const CountryContainer=()=>{

    const[countries,setCountries]=useState([]);
    const[selectedCountry,setSelectedCountry]=useState(null);
    const[favourites, setFavouriteCountries]=useState([]);

    useEffect(()=>{
        getCountries();
    },[])

    const onFavouriteClick=function(favourite){
        const updatedFavourites = [...favourites, favourite];
        setFavouriteCountries(updatedFavourites);
    }

    const onCountryClick=function(country){
        setSelectedCountry(country);
    };

    const getCountries=function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(response=>response.json())
        .then(countries=>setCountries(countries));
    };

    return(
        <div className="main-container">
            <CountriesList onCountryClick={onCountryClick} onFavouriteClick={onFavouriteClick} countries={countries}/>
            {selectedCountry ? <CountryDetail country={selectedCountry}/> : null}
            {favourites ? <FavouriteCountries onCountryClick={onCountryClick} favourites={favourites}/> : null}
        </div>
      
    )
}

export default CountryContainer