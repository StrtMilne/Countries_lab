import React from "react";

const CountryDetail=({country})=>{


    const languages=[];
    for ( let key in country.languages){
        languages.push(country.languages[key])
    }
    const LanguageItem=languages.map((language,index)=>{

        return <li key={index}>{language}</li>
    })

    return(
        <div>
            <h3>{country.name.common}</h3>
            <p>Flag:{country.flag}</p>
            <p>languages:</p>
            <ul>{LanguageItem}</ul>
        </div>
    )
}


export default CountryDetail