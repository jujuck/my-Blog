import React from "react";

function Auth() {
  return (
    <form className="container">
      <div className="form-outline mb-4">
        <input
          type="email"
          id="form2Example1"
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
