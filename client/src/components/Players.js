import React from "react";
import Nav from "./Nav";
import PlayerForm from "./PlayerForm";
import PlayerList from "./PlayerList";

const Players = () => {
  return (
    <div>
      <Nav>
        <PlayerList />
        <PlayerForm />
      </Nav>
    </div>
  );
};

export default Players;
