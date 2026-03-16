import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
  },
  founded: {
    type: Number,
    required: true,
  },
  // logo: {
  //   type: String,
  // },
  championships: {
    type: [Number],
  },
  // mascot: {
  //   name: {
  //     type: String,
  //   },
  //   image: {
  //     type: String,
  //   },
  // },
  division: {
    type: String,
    required: true,
  },
  stadium: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stadium",
    required: true,
  },
  conference: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Conference",
    required: true,
  },
});

const Team = mongoose.model("Team", teamSchema);
export default Team;
