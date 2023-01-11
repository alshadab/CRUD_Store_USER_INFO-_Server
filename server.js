const express = require("express");
const app = express();
const cors = require("cors");
require("./Connection");
require("dotenv").config();
const StudentReg = require("./Routers/StudentReg");

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use("/student", StudentReg);

app.listen(PORT, (res, req) => {
  console.log(`Listening on ${PORT}`);
});
