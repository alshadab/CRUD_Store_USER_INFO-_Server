const express = require("express");
const app = express();
const cors = require("cors");
require("./Connection");
require("dotenv").config();
const StudentReg = require("./Routers/StudentReg");

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

app.use("/student", StudentReg);

app.listen(port, (res, req) => {
  console.log(`Listening on ${port}`);
});
