import mongoose from "mongoose";

require("dotenv").config();

//connect db

let connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("connect successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connect;
