import React from 'react'

function NavBar () {
    const liStyle = {"align-self": "center", "font-size": "18px", "font-family": "Courier", "padding": "17px", "border-right": "2px solid black"}
    const aStyle = {"text-decoration": "none", "color": "black"}
    return (
        <div>
        <ul id="#ul-nb" style={{
            "list-style": "none",
            "display": "flex",
            "justify-content": "center",
            "height": "60px",
            "border-radius": "15px",
            "background-color": "rgba(44,255,77,.28)",
            "margin": "0px"


        }}>
            <li style={liStyle}><a href="#" style={aStyle}>HOME</a></li>
            <li style={liStyle}><a href="#" style={aStyle}>ABOUT US</a></li>
            <li style={liStyle}><a href="#" style={aStyle}>HEALTH & WELLNESS</a></li>
            <li style={liStyle}><a href="#" style={aStyle}>NEWS</a></li>
            <li style={liStyle}><a href="#" style={aStyle}>LOG-IN</a></li>
        </ul>
        </div>
    )
}

export default NavBar