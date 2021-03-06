import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import SubNav from "./SubNav";

const PlayerList = () => {
  const [playerList, setPlayerList] = useState([]);

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
  }, []);

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to remove ${name}?`)) {
      axios
        .delete(`http://localhost:8000/api/players/${id}`)
        .then((res) => {
          console.log(res.data);
          const filteredPlayers = playerList.filter((name, index) => {
            return name._id !== id;
          });
          setPlayerList(filteredPlayers);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container w-50 border border-dark p-3">
      <SubNav />
      <table className="table">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Preferred Postion</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {playerList
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((player, index) => {
              return (
                <tr key={index}>
                  <td>{player.name}</td>
                  <td>{player.position}</td>
                  <td>
                    <button className="btn-danger" onClick={() => handleDelete(player._id, player.name)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerList;
