import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container d-flex justify-content-between">
      <h1>
        <Link to="/players/list">Manage Players</Link>
      </h1>
      <h1>
        <Link to="/players/status/game/1">Manage Player Status</Link>
      </h1>
    </div>
  );
};

export default Nav;
