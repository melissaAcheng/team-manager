import axios from "axios";
import React, { useState } from "react";

const Game = ({ gameId, playerList, setPlayerList }) => {
  const handleChangeGameStatus = (playerId, gameStatus) => {
    axios
      .put(`http://localhost:8000/api/players/${playerId}`, {
        gameOneStatus: gameStatus,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {gameId === "1"
            ? playerList.map((player, index) => {
                return (
                  <tr key={player._id}>
                    <td>{player.name}</td>
                    <td>
                      <button
                        className={`${player.gameOneStatus === "Playing" ? "btn btn-success" : ""}`}
                        onClick={() => handleChangeGameStatus(player._id, "Playing")}
                      >
                        Playing
                      </button>
                    </td>
                    <td>
                      <button
                        className={`${player.gameOneStatus === "Not Playing" ? "btn btn-danger" : ""}`}
                        onClick={() => handleChangeGameStatus(player._id, "Not Playing")}
                      >
                        Not Playing
                      </button>
                    </td>
                    <td>
                      <button
                        className={`${player.gameOneStatus === "Undecided" ? "btn btn-warning" : ""}`}
                        onClick={() => handleChangeGameStatus(player._id, "Undecided")}
                      >
                        Undecided
                      </button>
                    </td>
                  </tr>
                );
              })
            : null}

          {gameId === "2"
            ? playerList.map((player, index) => {
                return (
                  <tr key={player._id}>
                    <td>{player.name}</td>
                    <td>
                      <button className={`${player.gameOneStatus === "Playing" ? "btn btn-success" : ""}`}>
                        Playing
                      </button>
                    </td>
                    <td>
                      <button className={`${player.gameOneStatus === "Not Playing" ? "btn btn-danger" : ""}`}>
                        Not Playing
                      </button>
                    </td>
                    <td>
                      <button className={`${player.gameOneStatus === "Undecided" ? "btn btn-warning" : ""}`}>
                        Undecided
                      </button>
                    </td>
                  </tr>
                );
              })
            : null}

          {gameId === "3"
            ? playerList.map((player, index) => {
                return (
                  <tr key={player._id}>
                    <td>{player.name}</td>
                    <td>
                      <button className={`${player.gameOneStatus === "Playing" ? "btn btn-success" : ""}`}>
                        Playing
                      </button>
                    </td>
                    <td>
                      <button className={`${player.gameOneStatus === "Not Playing" ? "btn btn-danger" : ""}`}>
                        Not Playing
                      </button>
                    </td>
                    <td>
                      <button className={`${player.gameOneStatus === "Undecided" ? "btn btn-warning" : ""}`}>
                        Undecided
                      </button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Game;
