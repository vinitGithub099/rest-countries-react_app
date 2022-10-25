import axios from "axios";
import React, { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";


const SearchFitler = ({ setData, setLoading, theme }) => {

    const countrySearchValue = useRef();
    const regionSearchValue = useRef();

    const handleSearchChange = async () => {
        setLoading(true)
        const searchValue = countrySearchValue.current.value;
        console.log(searchValue)
        if (searchValue.trim()) {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${searchValue}`)
            const data = await response.data;
            // console.log(data)
            setData(data);
        }
        else {
            const response = await axios.get(`https://restcountries.com/v3.1/all`)
            const data = await response.data;
            // console.log(data)
            setData(data);
        }
        setLoading(false)
    }

    const handleRegionChange = async () => {
        setLoading(true)
        const regionValue = regionSearchValue.current.value;
        console.log(regionValue)
        if (regionValue.trim()) {
            if (regionValue === 'All') {
                const response = await axios.get(`https://restcountries.com/v3.1/all`)
                const data = await response.data;
                // console.log(data)
                setData(data);
            }
            else {
                const response = await axios.get(`https://restcountries.com/v3.1/region/${regionValue}`)
                const data = await response.data;
                // console.log(data)
                setData(data)
            }
        }
        setLoading(false)
    }

    const themeClass = theme === 'light' ? 'bg-white light-shadow' : 'bg-darkBlue text-light dark-shadow' 


    return (
        <div className="search-bar">
            <div className={`form-group ${themeClass}`}>
                <AiOutlineSearch className={`search-icon`} />
                <input
                    className={`search-box ${theme === 'dark' && 'bg-darkBlue text-light'}`}
                    type="text"
                     name="searchText"
                    placeholder="Search for a country"
                    ref={countrySearchValue}
                    onChange={() => handleSearchChange()} />
            </div>
            <div className="form-group">
                <select
                    name="filters"
                    className={`filters ${themeClass}`}
                    ref={regionSearchValue}
                    onChange={() => handleRegionChange()}>
                    <option value="All">Filter by region</option>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Asia">Asia</option>
                </select>
            </div>
        </div>
    )
}

export default SearchFitler;