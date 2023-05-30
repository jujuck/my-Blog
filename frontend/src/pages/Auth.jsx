import React, { useState } from "react";
import connexion from "@services/connexion";

function Auth() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const log = await connexion.post("/login", user);
      console.info(log);
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
          value={user.email}
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
          value={user.password}
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
