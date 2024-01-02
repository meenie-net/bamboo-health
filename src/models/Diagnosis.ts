import mongoose from "mongoose";

const { Schema } = mongoose;

const diagnosisSchema = new Schema(
  {
    _id: {
      type: String,
      unique: true,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    quiz: {
      type: String,
      require: true,
    },
    score: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export default mongoose.models["Diagnosis"] ||
  mongoose.model("Diagnosis", diagnosisSchema);
