import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import connexion from "@services/connexion";
import { useCurrentUser } from "../contexts/UserContexts";

function Auth() {
  const [userToLog, setUserToLog] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useCurrentUser();
  const navigate = useNavigate();

  const handleUser = (event) => {
    setUserToLog({ ...userToLog, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const log = await connexion.post("/login", userToLog);
      setUser(log.msg);
      setTimeout(() => {
        navigate("/administration/articles");
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="container" onSubmit={(event) => login(event)}>
      <div className="form-outline mb-4">
        <input
          type="email"
          id="form2Example1"
          name="email"
          value={userToLog.email}
          onChange={(event) => handleUser(event)}
          className="form-control"
          required
          pattern="^[\w-\.]+@([\w-])+\.([\w-]{2,4})$"
        />
        <label className="form-label" htmlFor="form2Example1">
          Email address
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="password"
          id="form2Example2"
          value={userToLog.password}
          onChange={(event) => handleUser(event)}
          name="password"
          className="form-control"
          required
        />
        <label className="form-label" htmlFor="form2Example2">
          Password
        </label>
      </div>

      <button type="submit" className="btn btn-secondary btn-block mb-4">
        Connexion
      </button>
    </form>
  );
}

export default Auth;
