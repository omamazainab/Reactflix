import React from 'react'

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton"
import Display from './Display'
import Upload from './Upload'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const Nav = () => {

  const { isAuthenticated } = useAuth0();

  return (
    <div>
     
        <nav className="navbar navbar-expand-md ">

          <a className="navbar-brand logo" href="/">Reactflix</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto ">

            <li className="nav-item">
                <Link  to="/" className="Link">Home</Link>
            </li> 

            {isAuthenticated ? 
            <li className="nav-item">
                <Link  to="/upload" className="Link">Upload</Link>
            </li> :
            ''
          }

              <li className="nav-item">
                {isAuthenticated ? <LogoutButton /> : <div> <LoginButton /> <SignupButton /></div>}
              </li>

            </ul>

          </div>
        </nav>

        <Routes>
                <Route path="/" element={<Display></Display>} />
                <Route path="/upload" element={<Upload></Upload>} />
        </Routes>
    

    </div>
  )
}

export default Nav
