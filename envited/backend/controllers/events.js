const express = require("express");

const eventsRouter = express.Router();
const Event = require("../models/event.js");

// get
eventsRouter.get("/", async (req, res) => {
  const createEvents = await Event.find({
    date: { $gte: req.query.startDate, $lt: req.query.endDate },
  }).exec();
  console.log("query", req.query);
  res.status(200).json(createEvents);
});

// post
eventsRouter.post("/", async (req, res) => {
  console.log(req.body);
  const createEvent = await Event.create(req.body);
  res.status(200).json(createEvent);
});

module.exports = eventsRouter;
