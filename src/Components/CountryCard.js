import React from 'react';



const CountryCard = ({item, theme}) => {
    
    const themeClass = theme === 'light' ? 'bg-white light-shadow' : 'bg-darkBlue text-light' 

    return (
        <div className={`country-card ${themeClass}`}>
            <img src={item.flags.png} alt="" />
            <div className="info">
                <h3>{item.name.common}</h3>
                <p><span className="bold-text">Region: </span>{item.region}</p>
                <p><span className="bold-text">Populatoni: </span>{item.population}</p>
                <p><span className="bold-text">Capital: </span>{item.capital}</p>
            </div>
        </div>
    )
}

export default CountryCard;