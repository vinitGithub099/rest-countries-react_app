import React from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import ErrorPage from "./ErrorPage";


const CountryDetail = ({ countryData: data, theme }) => {
    const { id } = useParams();
    // console.log("id: ", id)
    // console.log(data)
    const countryInfo = data.find(item => item.name.official === id || item.name.common === id)
    // console.log(countryInfo)
    // console.log(typeof (borders))
    // console.log(borders)
    
    if (!countryInfo) {
        return <ErrorPage />;
    }

    const { languages, borders, name, region, subregion, population, currencies, capital, flags, tld } = countryInfo;

    const themeClass = theme === 'light' ? 'light-shadow' : 'bg-darkBlue' 
    
    
    return (
        <>
            <div className={`container ${theme === 'light' ? 'white-bg' : 'bg-dark'}`}>
                <div className="nav-bar">
                    <div className={`btn-box ${themeClass}`}>
                        <HiOutlineArrowNarrowLeft className="back-arrow" />
                        <Link className={`back-btn ${theme === 'dark' ? `text-light` : ``}`} to="/">Back</Link>
                    </div>
                </div>
                <div className="detail-container">
                    <div className={`img-box ${themeClass}`}>
                        <img className="flag-img" src={flags.png} alt="" />
                    </div>
                    <div className="detail-content">
                        <h1>{countryInfo.name.common}</h1>
                        <div className="box-1">
                            <div className="col">
                                <p><span className="bold-text">Native Name: </span>{name.common ? name.common : "No Data Avaailable"}</p>
                                <p><span className="bold-text">Population: </span>{population >= 0 ? population : "No Data Avaailable"}</p>
                                <p><span className="bold-text">Region: </span>{region ? region : "No Data Avaailable"}</p>
                                <p><span className="bold-text">Sub Region: </span>{subregion ? subregion : "No Data Avaailable"}</p>
                                <p><span className="bold-text">Capital: </span>{capital ? capital : "No Data Avaailable"}</p>
                            </div>
                            <div className="col">
                                <p><span className="bold-text">Top Level Domain: </span>{tld ? tld : "No Data Avaailable"}</p>
                                <p><span className="bold-text">Currencies: </span>{
                                    currencies ?
                                        Object.values(currencies)[0].name : "No Data Avaailable"
                                }</p>
                                <p>
                                    <span className="bold-text">Languages: </span>
                                    {languages ? Object.values(languages).join(', ') : "No Data Avaailable"}
                                </p>
                            </div>
                        </div>
                        {borders ?
                            <div className="border-countries">
                                <span className="bold-text">Border Countries: </span>
                                <div className="border-countries-box">
                                    {borders.map(x => {
                                        return data.map(({ cca2, cca3, ccn3, cioc, name }) => {
                                            // console.log(cca2, cca3, ccn3, cioc, name)
                                            if (cca2 === x || cca3 === x || ccn3 === x || cioc === x) {
                                                return <p className={theme === 'light' ? `light-shadow` : 'bg-darkBlue'} key={name.common}>{name.common}</p>;
                                            }
                                        })
                                    })}
                                </div>
                            </div> : ''
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default CountryDetail