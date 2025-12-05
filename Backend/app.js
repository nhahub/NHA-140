
const express = require("express");
const cors = require("cors");
const app = express();

const authRoute = require("./routes/auth");


app.use(cors({
  origin: process.env.FRONTEND_HOST, 
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoute);


app.get("/", (req, res) => {
  res.send("Blood Bridge Backend is running perfectly!");
});

const prospectRoutes = require("./routes/prospect");

app.use("/api/prospect", prospectRoutes);


const donorRoutes = require("./routes/donor");
app.use("/api/donor", donorRoutes);







module.exports = app;