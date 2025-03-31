import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { checkAndCreateDatabase, checkAndCreateTables } from "./database/db";
const app = express();
const PORT = 3000;

import userRoutes from "./routes/user.route";

const mongoUri = "mongodb://localhost:27017/trademaster";

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

async function initializeDatabase() {
  try {
    await checkAndCreateDatabase();
    await checkAndCreateTables();
    // Continue with your server initialization
  } catch (err) {
    console.error("Failed to initialize database:", err);
    process.exit(1);
  }
}

initializeDatabase();

try {
  mongoose.connect(mongoUri);

  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Error connecting to MongoDB", err);
  });

  app.get("/", (req, res) => {
    res.send("Hello, TypeScript with Node.js!");
  });

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("An error occurred while starting the server", error);
}
