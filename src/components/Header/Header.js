import React, {useContext} from 'react'
import './Header.css'
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from '../../contexts/ThemeContext'
import {Link} from 'react-router-dom'


function Header() {
    const {darkMode, setDarkMode} = useContext(ThemeContext);

    const handleTheme = ()=>{

        setDarkMode(!darkMode);

        localStorage.setItem("darkMode", !darkMode);
    }

  return (
    <div className={darkMode?"header-container":"header-container header-light" }>
        <Link to="/" className="logo">CineTrail</Link>
        <input placeholder="Search movies..." type="text" className="search-input"/>
        <div className="header-buttons-container">
            {
                darkMode?
                <div className="theme-buttons" >
                    <MdOutlineLightMode className="theme-icon" 
                    onClick={handleTheme} />
                    <MdOutlineDarkMode className="theme-icon theme-icon-active" />
                </div>
                :
                <div className="theme-buttons" >
                    <MdOutlineLightMode className="theme-icon theme-icon-active" />
                    <MdOutlineDarkMode className="theme-icon " 
                    onClick={handleTheme}/>
                </div>
            }

            <MdOutlineLightMode />
            <MdOutlineDarkMode />
            <button className="create-account-btn">Create an account</button>
        </div>
    </div>
  )
}

export default Header