import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "../LogoutButton/LogoutButton.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="login-btn" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;
