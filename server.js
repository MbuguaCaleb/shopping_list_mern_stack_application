const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/items"); //this is the Routes file
const path = require("path");

const app = express();

//Body Parser Middleware
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
//Connect to DB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("connected to db!")
);

//Use Routes
//Linking routes from the router file
app.use("/api/items", items);

//serve static assets if we are in production

if (process.env.NODE_ENV === "production") {
  //set static folder
  //serving from the directory client build
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
