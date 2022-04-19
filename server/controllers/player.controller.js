const Player = require("../models/player.model");

module.exports = {
  // queries here
  createNewPlayer: (req, res) => {
    Player.create(req.body)
      .then((newPlayer) => {
        console.log("createNewPlayer success");
        console.log(newPlayer);
        res.json(newPlayer);
      })
      .catch((err) => {
        console.log("createNewPlayer failed");
        console.log(err);
        res.status(400).json(err);
      });
  },
  getAllPlayers: (req, res) => {
    Player.find()
      .then((allPlayers) => {
        console.log("getAllPlayers success");
        console.log(allPlayers);
        res.json(allPlayers);
      })
      .catch((err) => {
        console.log("getAllPlayers failed");
        console.log(err);
        res.json(err);
      });
  },
  getOnePlayer: (req, res) => {
    Player.findOne({ _id: req.params.id })
      .then((onePlayer) => {
        console.log("getOnePlayer success");
        console.log(onePlayer);
        res.json(onePlayer);
      })
      .catch((err) => {
        console.log("getOnePlayer failed");
        console.log(err);
        res.status(400).json(err);
      });
  },
  updateOnePlayer: (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then((updatedPlayer) => {
        console.log("updateOnePlayer success");
        console.log(updatedPlayer);
        res.json(updatedPlayer);
      })
      .catch((err) => {
        console.log("updatePlayer failed");
        console.log(err);
        res.status(400).json(err);
      });
  },
  deleteOnePlayer: (req, res) => {
    Player.deleteOne({ _id: req.params.id })
      .then((deletedPlayer) => {
        console.log("deleteOnePlayer success");
        console.log(deletedPlayer);
        res.json(deletedPlayer);
      })
      .catch((err) => {
        console.log("deleteOnePlayer failed");
        console.log(err);
        res.json(err);
      });
  },
};
