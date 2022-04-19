import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const activeStyle = {
    fontWeight: "bolder",
  };

  return (
    <div className="container d-flex justify-content-evenly">
      <h1>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/players/list">
          Manage Players
        </NavLink>
      </h1>
      <h1>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/status/game/1">
          Manage Player Status
        </NavLink>
      </h1>
    </div>
  );
};

export default Nav;
