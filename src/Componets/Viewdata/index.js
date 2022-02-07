import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.css';

export default function Viewdata() {
  const [ViewData, setViewData] = useState([]);
  useEffect(() => {
    axios
      .get("https://61fd0f51f62e220017ce42da.mockapi.io/user")
      .then((response) => {
        setViewData(response.data);
      });
  }, []);



  //console.log(userData);

  const ShowData = ViewData.map((data) => {
		return (
			<tr>
				<td>{data.id}</td>
				<td>{data.FirstName}</td>
				<td>{data.LastName}</td>
				<td>{data.Age}</td>
				<td>{data.Hobbies}</td>
			</tr>
		);
	});

  

  return  (
    <>
      <div className="table">
        <table>
          <tr>
            <td>Id</td>
            <td>Firstname</td>
            <td>Lastname</td>
            <td>Age</td>
            <td>Hobbies</td>
          </tr>
          {ShowData}
        </table>
      </div>
    </>
  );
}
