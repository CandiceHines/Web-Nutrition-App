import React from "react"
import Prompts from "./Prompts"


function NutritionCalculator () {
    const liStyle = {
        "text-align": "center", "padding": "5px", "font-family": "Courier", "font-size": "20px",
        "border-width": "1px", "border-style": "solid", "background-color": "#dfddcc",
        "border-radius": "13px"
    }
    const ulStyle = {
        "list-style": "none", "padding": "100px", "padding-left": "350px",
        "padding-right": "350px"
    }
    const promptsLiStyle = {"list-style": "none", "text-align": "center", "font-family": "Courier"}
    
    return (
        <div>
            <body>
            <ul style={ulStyle}>
                <li style={liStyle}>DAILY NUTRIENT CALCULATOR</li>
            </ul>
            <li style={promptsLiStyle}><Prompts/></li>
            </body>
        </div>
    )
}

export default NutritionCalculator
