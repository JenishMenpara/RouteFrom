import React from "react";
import './index.css'
import { Link, Outlet } from "react-router-dom";

export default function Sidebar() {

 
  return (
    <>
      <div className="main">
        <div className="sidebar">
          <ul className="menulist">
            <nav>
              <Link to="/Viewdata">
                <li className="dataitem">
                  <span className="dataname">Viewdata</span>
                </li>
              </Link>
              <Link to="/Createdata">
                <li className="dataitem">
                  <span className="dataname">Createdata</span>
                </li>
              </Link>
              <Link to="/Changedata">
                <li className="dataitem">
                  <span className="dataname">Changedata</span>
                </li>
              </Link>
            </nav>
          </ul>
        </div>
        <Outlet/>
      </div>
    </>
  );
}
