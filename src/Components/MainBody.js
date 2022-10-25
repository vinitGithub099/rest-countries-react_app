import React from "react";
import CountryList from "./CountryList";
import SearchFitler from "./SearchFilter";

const MainBody = ({ data, setData, setLoading, theme }) => {

    return (
        <>
            <SearchFitler theme={theme} setData={setData} setLoading={setLoading} />
            <CountryList data={data} theme={theme} />
        </>
    )
}

export default MainBody;