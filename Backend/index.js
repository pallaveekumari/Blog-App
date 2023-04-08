const express = require("express");
const { connection } = require("./Config/db");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 7500;
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
