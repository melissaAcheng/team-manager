// handles the subnav for PlayerList and PlayerForm

import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SubNav = ({ listPageIsActive, setListPageIsActive }) => {
  const activeStyle = {
    fontWeight: "bolder",
  };

  return (
    <div className="container d-flex justify-content-evenly">
      <h2>
        <NavLink to={"/players/list"} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          List
        </NavLink>
      </h2>
      <h2>
        <NavLink to={"/players/addplayer"} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Add Player
        </NavLink>
      </h2>
    </div>
  );
};

export default SubNav;
