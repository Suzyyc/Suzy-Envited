require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const eventsRouter = require("./controllers/events");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;
const dbURL = process.env.MONGODB_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const whitelist = ["http://localhost:4001"];
app.use(
  cors({
    origin: (origin, cb) => {
      if (whitelist.indexOf(origin) !== -1) {
        cb(null, true);
      } else {
        cb(new Error());
      }
    },
  })
);

app.use("/events", eventsRouter);

mongoose.connect(dbURL, () => {
  console.log("Connected to event");
});

app.listen(PORT, () => {
  console.log("🎉🎊", "Celebrations happening on port", PORT, "🎉🎊");
});
