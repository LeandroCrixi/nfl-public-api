import mongoose from "mongoose";

const stadiumSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    opened: {
      type: Number,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { collection: "stadiums" },
);

const Stadium = mongoose.model("Stadium", stadiumSchema);
export default Stadium;
