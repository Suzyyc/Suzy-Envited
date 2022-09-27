const express = require("express");

const eventsRouter = express.Router();
const Event = require("../models/event.js");

// get
eventsRouter.get("/:id", async (req, res) => {
  const event = await Event.findById(req.params.id).exec();
  console.log("query", req.query);
  res.status(200).json(event);
});

// post
eventsRouter.post("/", async (req, res) => {
  console.log(req.body);
  const createEvent = await Event.create(req.body);
  res.status(200).json(createEvent);
});

module.exports = eventsRouter;
