import React from "react"
import Header from "./Header"
import NavBar from "./NavBar"
import NutritionCalculator from "./NutritionCalculator"

function LandingContainer() {
        return(
            <div style={{"background-color": "rgba(47, 164, 186, 0.1)", "min-height": "1000px"}}>
                <Header/>
                <NavBar/>
                <NutritionCalculator/>
            </div>
        )
}



export default LandingContainer