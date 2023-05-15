import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@components/Header";

function User() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default User;
