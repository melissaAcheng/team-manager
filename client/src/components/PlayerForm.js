import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SubNav from "./SubNav";

const PlayerForm = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [nameError, setNameError] = useState("");
  // const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const isEnabled = name.length > 2;

  const handleName = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 1) {
      setNameError("Name is required");
    } else if (e.target.value.length < 2) {
      setNameError("Name must be at least 2 characters long");
    } else {
      setNameError("");
    }
  };

  const createPlayer = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/players", {
        name,
        position,
      })
      .then((res) => {
        console.log("success", res.data);
        navigate("/players/list");
      })
      .catch((err) => {
        console.log("error", err.response.data.errors);
        // setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="container w-50 border border-dark p-3">
      <SubNav />
      <div className="container border border-dark p-3">
        <h1>Add Player</h1>
        <form onSubmit={createPlayer}>
          <div className="mb-3">
            <label className="form-label">Player Name:</label>
            <input className="form-control" type="text" value={name} onChange={handleName} />
          </div>
          {nameError && <p className="text-danger">{nameError}</p>}
          {/* {errors.name && <p className="text-danger">{errors.name.message}</p>} */}
          <div className="mb-3">
            <label className="form-label">Preferred Position:</label>
            <input
              className="form-control"
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <button disabled={!isEnabled} type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlayerForm;
