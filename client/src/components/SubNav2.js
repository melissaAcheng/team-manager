// handles the subnav for Games

import React from "react";
import { NavLink } from "react-router-dom";

const SubNav2 = ({ listPageIsActive, setListPageIsActive }) => {
  const activeStyle = {
    fontWeight: "bolder",
  };

  return (
    <div className="container d-flex justify-content-around">
      <h2>
        <NavLink to={"/status/game/1"} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Game 1
        </NavLink>
      </h2>
      <h2>
        <NavLink to={"/status/game/2"} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Game 2
        </NavLink>
      </h2>
      <h2>
        <NavLink to={"/status/game/3"} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Game 3
        </NavLink>
      </h2>
    </div>
  );
};

export default SubNav2;
