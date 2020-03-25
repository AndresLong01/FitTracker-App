const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

//const Tracker = require("./Model.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethoddb", { useNewUrlParser: true });

require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

module.exports = app;