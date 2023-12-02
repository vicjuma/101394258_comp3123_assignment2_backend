const mongoose = require("mongoose")

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/101394258_comp3123_assignment2_db");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Could not connect to the the mongodb database"));

db.once("open", () => {
    console.log("Connected to the mongodb database successfully");
})