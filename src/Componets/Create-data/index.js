import React , {useState} from "react";
import axios from "axios";
import "./index.css";
import Viewdata from "../Changedata";
//import { Redirect } from 'react-router-dom'

export default function Createdata() {

const url = "https://61fd0f51f62e220017ce42da.mockapi.io/user"

const [FirstName, setFirstName] = useState("");
const [LastName, setLastName] = useState("");
const [Age, setAge] = useState("");
const [CheckBox, setCheckBox] = useState("");


const savedata = ()=>{
  axios.post(url,{
    "FirstName" : FirstName,
    "LastName" : LastName,
    "Age" : Age,
    "Hobbies" : CheckBox
  }).then(Response =>{
    console.log(Response)
  });

}

const handleChange = (e)=>{
  const name = e.target.name;
  const value = e.target.value;

  if (name === "FirstName"){
    setFirstName(value)
  }else if (name === "LastName"){
    setLastName(value)
  }else  if(name === "Age"){
    setAge(value)
  }else{
    CheckBox === ""? setCheckBox(e.target.value) : setCheckBox(CheckBox +","+ e.target.value)
    console.log(CheckBox)
  }
}



  return (
    <>
      <form className="main-container">
        <div className="input-box">
          <label>First Name</label>
          <input value={FirstName} onChange={handleChange} name="FirstName" type="text"></input>
        </div>
        <div className="input-box">
          <label>Last Name</label>
          <input value={LastName} onChange={handleChange} name="LastName" type="text"></input>
        </div>
        <hr />
        <div className="age-box">
          <label>Age</label>
          <input value={Age} onChange={handleChange} name="Age" type="number"></input>
        </div>
        <hr />
        <div className="cheakbox" name="CheakBox" >
          <label>Hobbies</label>
          <br />
          Cricket<input type="checkbox" id="" name="sports" value="Cricket" onChange={handleChange} />
          <br />
          Basketball<input type="checkbox" id="" name="sports" value="Basketball" onChange={handleChange}/>          
          <br />
          Badminton<input type="checkbox" id="" name="sports" value="Badminton" onChange={handleChange} />         
          <br />
        </div>
        <hr />
        <div className="sub">
          <button name="" type="button" className="submitbtn" onClick={savedata}>
            Submit
          </button>
        </div>
      </form>

      
      
    </>
  );
}
