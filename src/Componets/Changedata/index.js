/* import React from "react";
import "./index.css";

export default function Changedata() {
  return (
    <>
      <div>
        <p>hello ChangeData</p>
      </div>
    </>
  );
} */

import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.css';

export default function Viewdata(props) {
  const [ViewData, setViewData] = useState([]);
  useEffect(() => {
    axios
      .get("https://61fd0f51f62e220017ce42da.mockapi.io/user")
      .then((response) => {
        setViewData(response.data);
      });
  }, []);

 const [Toggel, setToggel] = useState(false);
 const toggle = () => {
  setToggel(!Toggel)
}


const editdata=()=>{
  console.log(ViewData)
}

  //console.log(userData);

  const ShowData = ViewData.map((data) => {
		return (
			<tr>
				<td>{data.id}</td>
				<td>{data.FirstName}</td>
				<td>{data.LastName}</td>
				<td>{data.Age}</td>
				<td>{data.Hobbies}</td>
        <td>
        <button name="" type="button" className="submitbtn" onClick={toggle}>
            Update
          </button>
        </td>
        
			</tr>
		);
	});
   


  

  return  (
    <>

      { Toggel=== true ? (
      
      
      <form className="main-container1">
        <label>UPDATE DATA</label>
        <div className="input-box">
          <label>First Name</label>
          <input value=""/* onChange={handleChange} */ name="FirstName" type="text"></input>
        </div>
        <div className="input-box">
          <label>Last Name</label>
          <input value="" /* onChange={handleChange} */ name="LastName" type="text"></input>
        </div>
        <hr />
        <div className="age-box">
          <label>Age</label>
          <input value="" /* onChange={handleChange} */ name="Age" type="number"></input>
        </div>
        <hr />
        <div className="cheakbox" name="CheakBox" >
          <label>Hobbies</label>
          <br />
          Cricket<input type="checkbox" id="" name="sports" value="Cricket" /* onChange={handleChange} */ />
          <br />
          Basketball<input type="checkbox" id="" name="sports" value="Basketball" /* onChange={handleChange} *//>          
          <br />
          Badminton<input type="checkbox" id="" name="sports" value="Badminton" /* onChange={handleChange} */ />         
          <br />
        </div>
        <hr />
        <div className="sub">
          <button name="" type="button" className="submitbtn" onClick={(e)=>editdata(e.target.value)}>
            Update Data
          </button>
        </div>
      </form>) :<div className="table">
        <table>
          <tr>
            <td>Id</td>
            <td>Firstname</td>
            <td>Lastname</td>
            <td>Age</td>
            <td>Hobbies</td>
            <td>Update Data</td>
          </tr>
          {ShowData}
        </table>
      </div>}
    </>
  );
}
