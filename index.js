const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const bodyParser = require('body-parser')
require("./src/database/index.js")
const routes = require('./src/routes/index.js');

const app = express()

const port = process.env.PORT || '5000';

const normalizedPort = parseInt(port, 10);
if (isNaN(normalizedPort) || normalizedPort <= 0 || normalizedPort > 65535) {
  console.error('Invalid port specified in the environment variable. Using default port 5000.');
  process.exit(1);
}

app.use(cors())
app.use(morgan("tiny"))
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/employee", routes)

app.listen(port, () => {
    console.log(`Server running on port ${port}!`);
})
