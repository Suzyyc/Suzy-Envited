const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventEntrySchema = new Schema({
  name: { type: String, require: true },
  hostName: { type: String, require: true },
  startDate: { type: Date, require: true },
  endDate: { type: Date, require: true },
  address: { type: String, require: true },
  //    could use google autofill address
});

const Event = mongoose.model("Event", eventEntrySchema);

module.exports = Event;
