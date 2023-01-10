const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB = process.env.MONGODB;
mongoose.set("strictQuery", false);

mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })

  .catch((err) => console.log(err));
