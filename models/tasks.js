
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TasksSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tasks", TasksSchema);

