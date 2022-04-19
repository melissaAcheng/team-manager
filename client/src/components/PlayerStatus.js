import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import SubNav2 from "./SubNav2";
import Game from "./Game";

const PlayerStatus = (props) => {
  const { gameId } = useParams();
  console.log("CURRENT GAME", gameId);
  const [playerList, setPlayerList] = useState([]);
  const [triggerRefresh, setTriggerRefresh] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => {
        console.log(res.data);
        setPlayerList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [triggerRefresh]);

  const handleChangeGameStatus = (playerId, gameStatus) => {
    const newData = {};
    if (gameId === "1") {
      newData.gameOneStatus = gameStatus;
    } else if (gameId === "2") {
      newData.gameTwoStatus = gameStatus;
    } else {
      newData.gameThreeStatus = gameStatus;
    }
    console.log("NEW DATA", newData);
    axios
      .put(`http://localhost:8000/api/players/${playerId}`, newData)
      .then((res) => {
        console.log(res.data);
        setTriggerRefresh(!triggerRefresh);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container w-50 border border-dark p-3">
      <h1>Player Status - Game {gameId}</h1>
      <SubNav2 />
      {/* <Game playerList={playerList} setPlayerList={setPlayerList} gameId={gameId} /> */}
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
                      <button
                        className={`${player.gameTwoStatus === "Playing" ? "btn btn-success" : ""}`}
                        onClick={() => handleChangeGameStatus(player._id, "Playing")}
                      >
                        Playing
                      </button>
                    </td>
                    <td>
                      <button
                        className={`${player.gameTwoStatus === "Not Playing" ? "btn btn-danger" : ""}`}
                        onClick={() => handleChangeGameStatus(player._id, "Not Playing")}
                      >
                        Not Playing
                      </button>
                    </td>
                    <td>
                      <button
                        className={`${player.gameTwoStatus === "Undecided" ? "btn btn-warning" : ""}`}
                        onClick={() => handleChangeGameStatus(player._id, "Undecided")}
                      >
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
                      <button
                        className={`${player.gameThreeStatus === "Playing" ? "btn btn-success" : ""}`}
                        onClick={() => handleChangeGameStatus(player._id, "Playing")}
                      >
                        Playing
                      </button>
                    </td>
                    <td>
                      <button
                        className={`${player.gameThreeStatus === "Not Playing" ? "btn btn-danger" : ""}`}
                        onClick={() => handleChangeGameStatus(player._id, "Not Playing")}
                      >
                        Not Playing
                      </button>
                    </td>
                    <td>
                      <button
                        className={`${player.gameThreeStatus === "Undecided" ? "btn btn-warning" : ""}`}
                        onClick={() => handleChangeGameStatus(player._id, "Undecided")}
                      >
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

export default PlayerStatus;
