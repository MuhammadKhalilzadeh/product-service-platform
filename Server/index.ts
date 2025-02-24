import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

import userRoutes from "./routes/user.route";

const port = process.env.PORT || 3000;
const mongoUri =
  process.env.MONGO_URI || "mongodb://localhost:27017/trademaster";

app.use(cors());
app.use(express.json());

mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});

try {
  app.use("/users", userRoutes);

  app.use("/", (_, res) => {
    res.json("Hello buddy!");
  });

  app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}/`);
  });
} catch (error) {
  console.error("Error setting up the server:", error);
}
