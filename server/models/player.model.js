const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minLength: [2, "Name must be at least 2 characters long"],
    },
    position: {
      type: String,
    },
    gameOneStatus: {
      type: String,
      enum: ["Playing", "Not Playing", "Undecided"],
      default: "Undecided",
    },
    gameTwoStatus: {
      type: String,
      enum: ["Playing", "Not Playing", "Undecided"],
      default: "Undecided",
    },
    gameThreeStatus: {
      type: String,
      enum: ["Playing", "Not Playing", "Undecided"],
      default: "Undecided",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", PlayerSchema);
