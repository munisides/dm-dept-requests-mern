import mongoose from "mongoose";

const connectDB = async () => {
  let conn;
  try {
    if (process.env.NODE_ENV !== "production") {
      conn = await mongoose.connect("mongodb://localhost:27017/dm-dept-requests-api");
    } else {
      conn = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      });
    }

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
