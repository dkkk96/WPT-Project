import { Button } from "react-bootstrap";
import "./PurchasePolicy.css";
import YearSelector from "./YearSelector";
import { useState } from "react";

export function PurchasePolicy()
{
    const[formData,setFormData] =useState({name:"", phone:"",email:"", model:"Sedan",year:"2023",color:"red"})
            const [displayPrice, setDisplayPrice] = useState('')

const handleChange = (e)=>
{
    setFormData({...formData , [e.target.name]:e.target.value})
    console.log(e.target.value)
}

const handleSubmit = (e) =>
{
    e.preventDefault();
    console.log(formData);
}

            function PriceSetter(e)
            {
                    switch (e.target.value) {
                        case "Sedan":
                                setDisplayPrice("10000")
                            break;
                            case "Hatchback":
                                setDisplayPrice("8000")
                                break;
                            case "SUV":
                                setDisplayPrice("18000")
                            break;
                        default:
                            break;
                    }
            }

    return(
        <div className = "form">
            <h1>Purchase Policy</h1>
            <h2>Personal Details</h2>
            <form onSubmit={handleSubmit}>
                <div className = "Personal-Details">
                <div>
                <input type="text" placeholder="Enter your Name" name = "name" required onChange={handleChange} ></input>
                </div>
                <div>
                <input type="text" placeholder="Enter your Mobile Number" name="phone" required onChange={handleChange} ></input>
                </div>
               <div>
               <input type="email" placeholder="Enter your Email ID" name="email" required onChange={handleChange}></input>
               </div>
                </div>
                <hr></hr>
                <h2>Vehicle Details</h2>
                <div className = "vehicle-details" onChange={handleChange}>
                   <select onChange={PriceSetter} name = "model" onSelect={handleChange}>
                    <option value = "Sedan">Sedan</option>
                    <option value = "Hatchback">HatchBack</option>
                    <option value = "SUV">SUV</option>
                    </select> 
                </div>
                
                <div name = "year" onChange={handleChange}>
                    <YearSelector required ></YearSelector>
                </div>
                <div >
                    <select name = "color" onChange={handleChange}>
                        <option>White</option>
                        <option>Black</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Silver</option>
                        <option>Pink</option>
                        <option>Purple</option>
                    </select>
                </div>
                <div className="display-rate">
                    <p>You have to pay</p>
                    <p>: {displayPrice}</p>
                </div>
                <Button className = "Purchase-Button" value= 'Register'>Buy</Button>

            </form>
        </div>
    );
}