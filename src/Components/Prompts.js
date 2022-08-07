import {React, useState} from "react"
import Select from "react-dropdown-select" 




function Prompts () {
    const [isInfant, setIsInfant] = useState(null)
    const [infantAgeRange, setInfantAgeRange] = useState(null)
    const [sex, setSex] = useState(null)
    const options = [{value: "9, 13"}, {value: "14, 18"}, {value: "19, 30"}, {value: "31, 50"}, {value: "51, 70"}, {value: "> 70"}]
    

    
    return(
        <div>
            { isInfant === null &&
            <div>
                <p>Are these nutrient recommendations for an infanct?</p>
                <p>(Infant = 0 - 12 months)</p>
                <div>
                <button onClick={() => {
                setIsInfant("yes")
            }}>
                yes
                </button>
                <button onClick={() =>{
                setIsInfant("no")
            }}>
                no
                </button>
                </div>
            </div>
            }
            { isInfant === "yes" &&
                //DATA FOR INFANT
                <div>
                    <p>How old is your infant?</p>
                    <div>
                    <button onClick={() => {
                        setInfantAgeRange("0, 6")
                    }}>
                        0 - 6 Months
                    </button>
                    <button onClick={() => {
                        setInfantAgeRange("7, 12")
                    }}>
                        7 - 12 Months
                    </button>
                    </div>
                </div>
            }
            { isInfant === "no" && sex === null &&
                <div>
                    <p>What is your sex?</p>
                    <div>
                        <button onClick={() =>{
                            setSex("Male")
                        }}>
                           Male 
                        </button>
                        <button onClick={() =>{
                            setSex("Female")
                        }}>
                            Female
                        </button>
                    </div>
                </div>
            }
            { sex === "Male" &&
                <div>
                    <p>Select your age</p>
                    <select>
                        <option value="9, 13">9-13</option>
                        <option value="14, 18">14-18</option>
                        <option value="19, 30">19-30</option>
                        <option value="31, 50">31-50</option>
                        <option value="51, 70">51-70</option>
                        <option value="> 70">70 and above</option>
                    </select>
                </div>
            }
            {sex === "Female" &&
                <div>
                    <p>Select your age</p>
                    <select>
                        <option value="9, 13">9-13</option>
                        <option value="14, 18">14-18</option>
                        <option value="19, 30">19-30</option>
                        <option value="31, 50">31-50</option>
                        <option value="51, 70">51-70</option>
                        <option value="> 70">70 and above</option>
                    </select>
                </div>
                
            }
                
        </div>
    )
}
export default Prompts