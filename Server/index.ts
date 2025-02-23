import express from "express";
import cors from "cors";
const app = express();

import userRoutes from "./routes/user.route";

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

try {
  app.use("/users", userRoutes);

  app.use("/", (req, res) => {
    res.json("Hello buddy!");
  });

  app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}/`);
  });
} catch (error) {
  console.error("Error setting up the server:", error);
}
