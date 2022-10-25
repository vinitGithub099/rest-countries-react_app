import React from "react";
import { BsMoonFill } from "react-icons/bs";

const Header = ({theme, setTheme}) => {

    const themeClass = theme === 'light' ? 'bg-white header-shadow-light' : 'bg-darkBlue' 

    const toggleTheme = () => theme == 'light' ? setTheme('dark') : setTheme('light')

    return (
        <div className={`header ${themeClass}`}>
            <h3>Where in the world?</h3>
            <div className="theme-btn">
                <BsMoonFill className="theme-icon" onClick={toggleTheme}/>
                <span className="theme-text">Dark Mode</span>
            </div>
        </div>
    )
}

export default Header;