const express = require("express");
const { connection } = require("./Config/db");
const { userRoutes } = require("./Routes/userRoutes");
const cors = require("cors");
const { analyticsRoutes } = require("./Routes/analyticsRoutes");
const { postRoutes } = require("./Routes/postRoutes");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 7500;

app.use(cors(), express.json());
app.use("/users", userRoutes);
app.use("/analytics", analyticsRoutes);
app.use("/posts", postRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to ADOBE");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`connecting to the PORT ${PORT}`);
  } catch (err) {
    console.log("Failed to connect to db");
    console.log(err);
  }
});
