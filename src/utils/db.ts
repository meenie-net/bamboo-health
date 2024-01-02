import mongoose from "mongoose";

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO!);
  } catch (error) {
    throw new Error("connect failed");
  }
};
