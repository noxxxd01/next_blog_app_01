import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB is connected");
  } catch (error) {
    throw new Error("Connection failed");
  }
};
export default connectDb;
