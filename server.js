const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./src/routes/routes");

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true, limit: "50mb", parameterLimit: 50000000 }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb", parameterLimit: 50000000 }));

app.use("/api", routes);

app.listen(3001, () => {
    console.log("Server running on port 3001");
});