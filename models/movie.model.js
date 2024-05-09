import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: Number,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
});

export const Movie = mongoose.model("Movie", MovieSchema);