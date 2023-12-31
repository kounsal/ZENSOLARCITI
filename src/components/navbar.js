import React, { Component } from "react";
import "./main.css";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
   render() {
      return (
         <nav className="navbar navbar-expand-md">
            <div className="container">
               <a className="navbar-brand" href="/">
                  <img
                     src={require("../assets/zen_solarciti.png")}
                     height="50px"
                  />
               </a>
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon" />
               </button>
               <div
                  className="collapse navbar-collapse "
                  id="navbarSupportedContent"
               >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/community">
                           Community
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/Enterprise">
                        Enterprise Solution
                        </NavLink>
                     </li>
                    
                  
                     {/* <li className="nav-item dropdown">
                        <a
                           className="nav-link dropdown-toggle"
                           href="/"
                           role="button"
                           data-bs-toggle="dropdown"
                           aria-expanded="false"
                        >
                           Display Stats
                        </a>
                        <ul className="dropdown-menu">
                           <li>
                              <a className="dropdown-item" href="/">
                                 Action
                              </a>
                           </li>
                           <li>
                              <a className="dropdown-item" href="/">
                                 Another action
                              </a>
                           </li>
                           <li>
                              <hr className="dropdown-divider" />
                           </li>
                           <li>
                              <a className="dropdown-item" href="/">
                                 Something else here
                              </a>
                           </li>
                        </ul>
                     </li> */}
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                        Join Us
                        </NavLink>
                     </li>
                  </ul>
                  <div className="d-flex">
                    
                     {/* <NavLink  to="/Contact">
                     <button
                        className="btn btn-cust nav-item"
                        type="submit"
                     >
                       Join Us
                     </button>
                       </NavLink>
                      */}
{/* 
                     <button
                        className="btn btn-outline-success nav-item"
                        type="submit"
                     >
                        Search
                     </button> */}
                  </div>
               </div>
            </div>
         </nav>
      );
   }
}

export { Navbar };
