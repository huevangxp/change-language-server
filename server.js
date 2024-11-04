const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const routes = require("./src/routes/routes");

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json({ extended: true, limit: "50mb", parameterLimit: 50000000 }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb", parameterLimit: 50000000 }));

app.use("/api", routes);

app.listen(port, () => {
    console.log("Server running on port : " + port);
});