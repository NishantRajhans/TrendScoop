const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connect } = require("./config/database.js");
const {TweeterTrends} = require("./utils/TweeterTrends.js");
const { v4: uuidv4 } = require("uuid");
const Trends = require("./models/Trends.js");
dotenv.config();
const app = express();
const port = 4000;
connect();
app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.get("/", async (req, res) => {
  try {
    const { trends, endTime ,selectedProxy} = await TweeterTrends();
    const trendData = new Trends({
      uniqueId: uuidv4(),
      trend1: trends[0], 
      trend2: trends[1],
      trend3: trends[2], 
      trend4: trends[3], 
      trend5: trends[4], 
      endDateTime: endTime,
      ipAddress: selectedProxy,
    });
    await trendData.save();
    return res.status(200).json({
      message: "Data scraped and stored successfully",
      success: true,
      data: trendData,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      message: "Server error occurred",
      error: error.message,
    });
  }
});
app.listen(port, () => {
  console.log("Listening on port " + port);
});

