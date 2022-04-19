const PlayerController = require("../controllers/player.controller");

module.exports = (app) => {
  app.post("/api/players", PlayerController.createNewPlayer);
  app.get("/api/players", PlayerController.getAllPlayers);
  app.get("/api/players/:id", PlayerController.getOnePlayer);
  app.put("/api/players/:id", PlayerController.updateOnePlayer);
  app.delete("/api/players/:id", PlayerController.deleteOnePlayer);
};
