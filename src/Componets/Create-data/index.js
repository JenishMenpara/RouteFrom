import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";



export default function Createdata() {
  const url = "https://61fd0f51f62e220017ce42da.mockapi.io/user";

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Age, setAge] = useState("");
  const [CheckBox, setCheckBox] = useState({
    Cricket: false,
    Basketball: false,
    Badminton: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;

    if (name === "FirstName") {
      setFirstName(value);
    } else if (name === "LastName") {
      setLastName(value);
    } else if (type === "checkbox") {
      setCheckBox((prvs) => ({ ...prvs, [name]: e.target.checked }));
    } else {
      setAge(value);
    }
  };
  console.log(CheckBox);

  const savedata = () => {
    axios
      .post(url, {
        FirstName: FirstName,
        LastName: LastName,
        Age: Age,
        Hobbies: CheckBox,
      })
      .then((Response) => {
        console.log(Response);
        navigate("/Viewdata");
      });
  };
  return (
    <>
      <form className="main-container">
        <label>CREATE DATA</label>
        <div className="input-box">
          <label>First Name</label>
          <input
            required
            autoComplete="off"
            value={FirstName}
            onChange={handleChange}
            name="FirstName"
            type="text"
          ></input>
        </div>
        <div className="input-box">
          <label>Last Name</label>
          <input
            required
            autoComplete="off"
            value={LastName}
            onChange={handleChange}
            name="LastName"
            type="text"
          ></input>
        </div>
        <hr />
        <div className="age-box">
          <label>Age</label>
          <input
            required
            value={Age}
            onChange={handleChange}
            name="Age"
            type="number"
          ></input>
        </div>
        <hr />
        <div className="cheakbox" name="CheakBox">
          <label>Hobbies</label>
          <br />
          Cricket
          <input
            type="checkbox"
            id="Cricket"
            name="Cricket"
            onChange={handleChange}
            checked={CheckBox.Cricket}
          />
          <br />
          Basketball
          <input
            type="checkbox"
            id="Basketball"
            name="Basketball"
            onChange={handleChange}
            checked={CheckBox.Basketball}
          />
          <br />
          Badminton
          <input
            type="checkbox"
            id="Badminton"
            name="Badminton"
            onChange={handleChange}
            checked={CheckBox.Badminton}
          />
          <br />
        </div>
        <hr />
        <div className="sub">
          <button
            name=""
            type="button"
            className="submitbtn"
            onClick={savedata}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
