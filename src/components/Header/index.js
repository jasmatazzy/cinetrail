import React from 'react'
import moon from "../../assets/moon.svg"
import sun from "../../assets/sun.svg"

const Header = () => {

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width:"100%"
  }

  const lightDarkModeStyle = {
    background: "black",
    // width: "35px",
    // height: "40px",
    borderRadius: "24px",
  }

  return (
    <div style={headerStyle}>
      <div style={{color:"red", fontSize:"35px"}}>
        CineTrail
      </div>

      <div>
        <input type="text" placeholder="Search movies..."></input>
      </div>

      <div style={{display:"flex"}}>
        <div style={lightDarkModeStyle}>
          <img src={moon} alt="light-dark" />
          <img src={sun} alt="light-dark" />
        </div>
        <button>Create an account</button>
      </div>
    </div>
  )
}

export default Header