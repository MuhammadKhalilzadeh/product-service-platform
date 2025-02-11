import express from "express";

const app = express();

const port = process.env.PORT || 3000;

try {
  app.use("/", (req, res) => {
    res.json("Hello buddy!");
  });

  app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}/`);
  });
} catch (error) {
  console.error("Error setting up the server:", error);
}
