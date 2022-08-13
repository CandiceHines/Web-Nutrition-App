import React, {useState} from 'react'

function NavBar () {
    const [newsDisplay, setnewsDisplay] = useState("none")
    const [healthDisplay, sethealthDisplay] = useState("none")
    const liStyle = {"align-self": "center", "font-size": "18px", "font-family": "Courier", "padding": "17px", "border-right": "2px solid black"}
    const aStyle = {"text-decoration": "none", "color": "black"}
    const dropDown ={"display": healthDisplay, "position": "absolute", "background-color": "white", "margin-top": "20px",
    "margin-left": "-16px", "margin-right": "5px", "min-width": "213px", "border-left": "2px solid black",
        "border-right": "2px solid black", "border-bottom": "2px solid black"}
    const healthaStyle ={"text-decoration": "none", "display": "block", "color": "black", "padding": "8px",
    "text-font": "Courier", "border-top": "2px solid black"}
    const dropDownnews ={"display": newsDisplay, "position": "absolute", "background-color": "white", "margin-top": "20px",
        "margin-left": "-16px", "margin-right": "5px", "min-width": "175px", "border-left": "2px solid black",
        "border-right": "2px solid black", "border-bottom": "2px solid black"}
    const newsaStyle ={"text-decoration": "none", "display": "block", "color": "black", "padding": "8px",
        "text-font": "Courier", "border-top": "2px solid black"}

    return (
        <div>
        <ul id="#ul-nb" style={{
            "list-style": "none",
            "display": "flex",
            "justify-content": "center",
            "height": "60px",
            "border-radius": "15px",
            "background-color": "rgba(44,255,77,.12)",
            "margin": "0px"


        }}>
            <li style={liStyle}><a href="#" style={aStyle}>HOME</a></li>
            <li style={liStyle}><a href="#" style={aStyle}>ABOUT US</a></li>
            <li style={liStyle}><div><a style={aStyle} onMouseOver={()=> sethealthDisplay("block")} onMouseOut={()=> sethealthDisplay("none")}>HEALTH & WELLNESS</a>
                <div style={dropDown}>
                <a href="#" style={healthaStyle}>Nutrition Facts</a>
                <a href="#" style={healthaStyle}>Exercise & Fitness</a>
                <a href="#" style={healthaStyle}>Recipies</a>
                    <a href="#" style={healthaStyle}>Books</a>
                    <a href="#" style={healthaStyle}>Podcast</a>
            </div>
            </div>
            </li>
            <li style={liStyle}><div><a style={aStyle} onMouseOver={()=> setnewsDisplay("block")} onMouseOut={()=> setnewsDisplay("none")}>NEWS</a>
                <div style={dropDownnews}>
                <a href="#" style={newsaStyle}>Food</a>
                <a href="#" style={newsaStyle}>Climate</a>
                <a href="#" style={newsaStyle}>Public Health</a>
                </div>
            </div>
        </li>
            <li style={liStyle}><a href="#" style={aStyle}>LOG-IN</a>
            </li>
        </ul>

        </div>
    )
}

export default NavBar