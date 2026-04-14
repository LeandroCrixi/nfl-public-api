import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from './src/config/db.js'

dotenv.config();

const PORT = process.env.PORT || 3000;
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log('http://localhost:3000/api/v1/teams')
  });
};

startServer();