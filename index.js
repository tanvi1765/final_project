const express = require("express");
const http = require("http");
const { connectDB } = require("./src/db/db.connection");
const routes = require("./src/routes");
const config = require("./src/config/config");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/v1", routes);

app.use(express.static(`./public`));
/** Database connection */
    connectDB();

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server is started");
});