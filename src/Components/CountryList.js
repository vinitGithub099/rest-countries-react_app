import React from "react";
import { Link } from 'react-router-dom';
import CountryCard from "./CountryCard";


const CountryList = ({ data, theme }) => {

    // console.log(data)
    return (
        <div className="country-list">
            {data.map((item) => {
                return (
                    <Link
                        className={`link ${theme === 'dark' ? `text-light` : `text-dark`}`}
                        index="true"
                        to={`/country_detail/${item.name.official}`} key={item.name.official}>
                        {/* to={`/country_detail/${item.name.official.indexOf(' ') >= 0 ? item.name.common : item.name.official}`} key={item.name.official}> */}
                        <CountryCard item={item} theme={theme} />
                    </Link>
                )
            })}
        </div>
    )
}

export default CountryList;