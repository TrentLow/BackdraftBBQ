'use strict';
"use strict";

var fs = require("fs"),
    path = require("path"),
    http = require("http");

var express = require("express");
var app = express();
app.use(express.static("public"));
var bodyParser = require("body-parser");
app.use(
    bodyParser.json({
        strict: false
    })
);
var oasTools = require("oas-tools");
var jsyaml = require("js-yaml");
var serverPort = 8080;

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname, "api/swagger.yaml"), "utf8");
var swaggerDoc = jsyaml.safeLoad(spec);

// swaggerRouter configuration
var options = {
    controllers: path.join(__dirname, "./controllers"),
    useStubs: process.env.NODE_ENV === "development" // Conditionally turn on stubs (mock mode)
};

oasTools.configure(options);

// Initialize the Swagger middleware
oasTools.initialize(swaggerDoc, app, function () {
    http.createServer(app).listen(serverPort, function () {
        console.log(
            "Your server is listening on port %d (http://localhost:%d)",
            serverPort,
            serverPort
        );
        console.log(
            "Swagger-ui is available on http://localhost:%d/docs",
            serverPort
        );
    });
});
