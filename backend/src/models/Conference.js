import mongoose from "mongoose";

const conferenceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  abbreviation: {
    type: String,
    required: true,
  },
  divisions: {
    type: [String],
    required: true,
  },
});

const Conference = mongoose.model("Conference", conferenceSchema);
export default Conference;
