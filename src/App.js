import './App.css';
import Header from './Components/Header';
import MainBody from './Components/MainBody';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryDetail from './Components/CountryDetail';
import Preloader from './Components/Preloader';
import ErrorPage from './Components/ErrorPage';


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => res)
      .then(r => {
        // console.log(r.data)
        // console.log(new Set(r.data.map(i => i.region)))
        setData(r.data)
        setLoading(false)
      })
      .catch(e => console.log(e))

  }, [])


  return (
    <div className={theme === 'light' ? "bg-light": "bg-dark text-light"}>
      <Header theme={theme} setTheme={setTheme} />
      <Routes>
        <Route exact path="/" element={<MainBody data={data} setData={setData} setLoading={setLoading} theme={theme}/>} />
        {!isLoading &&  <Route index path="/country_detail/:id" element={<CountryDetail countryData={data} theme={theme} />} />}
        {!isLoading && <Route path="/*" element={<ErrorPage />} />}
      </Routes>
      {isLoading && <Preloader /> }
    </div>
  );
}

export default App;
