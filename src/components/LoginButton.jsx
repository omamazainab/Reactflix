import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    

    <button 
      type="button" 
      className="btn btn-success login-btn"
      onClick={() => loginWithRedirect()}  //redirects to the Auth0 /authorize endpoint to carry out the authentication process
      >
        Log In
    </button>
  );
};

export default LoginButton;