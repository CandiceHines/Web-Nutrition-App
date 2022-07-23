import React from "react"
import ReactDOM from "react-dom"
import LandingContainer from "./Components/LandingContainer"
import NavBar from "./Components/NavBar"

ReactDOM.render(<React.StrictMode>
                <LandingContainer/>
                <NavBar/>
                </React.StrictMode>,
                document.getElementById("root")
)

