import {React, useState, useEffect} from "react"
import Select from "react-dropdown-select" 




function Prompts () {
    const [breastfeeding, setBreastfeeding] = useState(null)
    const [pregnant, setPregnant] = useState(null)
    const [nutrientData, setNutrientdata] = useState(null)
    const [submit, setSubmit] = useState(null)
    const [isInfant, setIsInfant] = useState(null)
    const [infantAgeRange, setInfantAgeRange] = useState("6")
    const [age, setAge] = useState("1")
    const optionsInfant = [{value: "6"}, {value: "12"}]
    const [sex, setSex] = useState(null)
    const options = [{value: "3"}, {value: "8"}, {value: "13"},
        {value: "18"}, {value: "30"}, {value: "50"}, {value: "70"}, {value: "71"}]

    useEffect(()=>{
        console.log(sex, age)
        if (isInfant === "yes" && submit === true) {
            fetch(`http://127.0.0.1:5000/nutrientcalculator?infant=${isInfant}&age=${infantAgeRange}`)
                .then(response => response.json()).then(data => setNutrientdata(data))
        }
        else if (isInfant === "no" && sex === "male") {
            fetch(`http://127.0.0.1:5000/nutrientcalculator?infant=${isInfant}&sex=${sex}&age=${age}`)
                .then(response => response.json()).then(data => setNutrientdata(data))
        }
        else if (isInfant === "no" && (sex === "female" && age < "14")) {
            fetch(`http://127.0.0.1:5000/nutrientcalculator?infant=${isInfant}&sex=${sex}&age=${age}`)
                .then(response => response.json()).then(data => setNutrientdata(data))
        }
        else if (sex === 'female' && age >= "14" && age <= "50") {
            fetch(`http://127.0.0.1:5000/nutrientcalculator?infant=${isInfant}&sex=${sex}&age=${age}
               &pregnancy=${pregnant}&breastfeeding=${breastfeeding}`)
                .then(response => response.json()).then(data => setNutrientdata(data))
        }
    }, [isInfant, infantAgeRange, age, sex, pregnant, breastfeeding, submit])


    return(
        <div>
            { isInfant === null &&
            <div>
                <p>Are these nutrient recommendations for an infanct?</p>
                <p>(Infant = 0 - 12 months)</p>
                <div>
                    <button onClick={()=>{setIsInfant("yes")}}> YES </button>
                    <button onClick={()=>{setIsInfant("no")}}> NO</button>
                </div>
            </div>
            }
            { isInfant === "yes" &&
                //DATA FOR INFANT
                <div style={{"margin-bottom": "40px"}}>
                    <p>How old is your infant?</p>
                    <select value={infantAgeRange} onChange={(event) => {setInfantAgeRange(event.target.value)}}>
                        <option value="6">0-6 Months</option>
                        <option value="12">7-12 Months</option>
                    </select>
                    <button type="submit" onClick={()=> {setSubmit(true)}}>Submit</button>
                </div>
            }
            { isInfant === "no" && sex === null &&
                <div>
                    <p>What is your sex?</p>
                    <div>
                        <button onClick={() =>{
                            setSex("male")
                        }}>
                           Male 
                        </button>
                        <button onClick={() =>{
                            setSex("female")
                        }}>
                            Female
                        </button>
                    </div>
                </div>
            }
            { sex === "male" && 
                <div style={{"margin-bottom": "40px"}}>
                    <p>Select your age</p>
                    <select value={age} onChange={(event) => {setAge(event.target.value)}}>
                        <option value="3">1-3</option>
                        <option value="8">4-8</option>
                        <option value="13">9-13</option>
                        <option value="18">14-18</option>
                        <option value="30">19-30</option>
                        <option value="50">31-50</option>
                        <option value="70">51-70</option>
                        <option value="71">70 and above</option>
                    </select>
                        <button type="submit" onClick={() => setSubmit(true)}>Submit</button>
                </div>
            }
            { sex === "female" && 
                <div>
                    <p>Select your age</p>
                    <select value={age} onChange={(event) => {setAge(event.target.value)}}>
                        <option value="3">1-3</option>
                        <option value="8">4-8</option>
                        <option value="13">9-13</option>
                        <option value="18">14-18</option>
                        <option value="30">19-30</option>
                        <option value="50">31-50</option>
                        <option value="70">51-70</option>
                        <option value="71">70 and above</option>
                    </select>
                    <button type="submit" onClick={() => setSubmit(true)}>Submit</button>
                </div>
            }
            {(sex === "female" && (age >= "14" && age <= "50")) && 
                <div>
                <p>Are you pregnant?</p>
                <button onClick={() => setPregnant("yes")}>Yes</button>
                <button onClick={() => setPregnant("no")}>No</button>
                    <p>Are you breastfeeding?</p>
                    <button onClick={() => setBreastfeeding("yes")}>Yes</button>
                    <button onClick={() => setBreastfeeding("no")}>No</button>
                    { (pregnant !== null && breastfeeding !== null) &&
                        <div>
                        <button type="submit" onClick={()=> setSubmit(true)}>Submit</button>
                        </div>
                    }
                </div>
            }
            { nutrientData !== null && submit === true &&
                <table style={{"margin-left": "auto", "margin-right": "auto"}}>
                    {Object.entries(nutrientData).map(entry => {
                        return <tr>
                            <td style={{"text-align": "left"}}>{entry[0]}</td>
                            <td style={{"text-align": "right"}}>{entry[1]}</td>
                        </tr>
                    })}
                </table>
            }
                
        </div>
    )
}
export default Prompts