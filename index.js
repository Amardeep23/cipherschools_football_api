const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require('./routes/Users')

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  })
  .then(() => {
    console.log("ConneTED to Db SUCCESSFUl");
  })
  .catch((err) => {
    console.log(err);
  });

  //to accept json file as body
app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(8000, () => {
  console.log("Backend SErvEr is RuNning");
});
