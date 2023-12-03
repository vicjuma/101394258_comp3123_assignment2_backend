const mongoose = require("mongoose")
const { MongoClient, ServerApiVersion } = require('mongodb');

mongoose.set("strictQuery", false);
// mongoose.connect("mongodb://localhost:27017/101394258_comp3123_assignment2_db");
const uri = "mongodb+srv://oluochvee:jumavic9118@cluster0.rspbp3j.mongodb.net/?retryWrites=true&w=majority/employees";
mongoose.connect(uri);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Could not connect to the the mongodb database"));

db.once("open", () => {
    console.log("Connected to the mongodb database successfully");
})