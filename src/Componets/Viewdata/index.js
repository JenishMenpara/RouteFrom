import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import Updatedata from "../Changedata";
import { useNavigate } from "react-router-dom";

export default function Viewdata() {
  const [ViewData, setViewData] = useState([]);

  useEffect(() => {
    axios
      .get("https://61fd0f51f62e220017ce42da.mockapi.io/user")
      .then((response) => {
        setViewData(response.data);
      });
  }, []);

  const deletedata = (id, del) => {
    del.preventDefault();
    if (window.confirm("you have delete data")) {
      axios
        .delete(`https://61fd0f51f62e220017ce42da.mockapi.io/user/${id}`)
        .then((response) => {
          window.location.reload();
        });
    }
  };

  const navigate = useNavigate();
  const ShowData = ViewData.map((data) => {

    let getHobbies = data.Hobbies;
    let showHobbies = "";
    Object.keys(getHobbies).map((key) =>
          getHobbies[key] === true ? (showHobbies += key+ "  ") : "");

    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.FirstName}</td>
        <td>{data.LastName}</td>
        <td>{data.Age}</td>
        <td>{showHobbies}</td>
        <td>
          <button
            name=""
            type="button"
            className="submitbtn"
            onClick={(upd) =>
              Updatedata(

                navigate(`../Changedata/${data.id}`)
              )
            }
          >
            Update
          </button>
        </td>
        <td>
          <button
            name=""
            type="button"
            className="submitbtn"
            onClick={(del) => deletedata(data.id, del)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="table">
      <label className="labeldata">VIEWDATA</label>
        <table>
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Hobbies</th>
            <th>Update Data</th>
            <th>Delete Data</th>
          </tr>
          {ShowData}
        </table>
      </div>
    </>
  );
}
