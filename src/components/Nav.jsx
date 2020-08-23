import React from 'react'

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

const Nav = () => {

  const { isAuthenticated } = useAuth0();
  
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <a class="navbar-brand" href="/">Reactflix</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

            {/* <li class="nav-item">
        <a class="nav-link" href="/">Link</a>
      </li> */}

            {isAuthenticated ? <LogoutButton /> : <LoginButton />}

          </ul>

        </div>
      </nav>
    </div>
  )
}

export default Nav
