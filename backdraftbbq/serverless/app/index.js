'use strict';

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

var jwt = require('jsonwebtoken');
var fs = require('fs');
var cert_pub = fs.readFileSync(__dirname + '/config/backdraft.pem');
function verifyToken(req, secDef, token, next) {
    const bearerRegex = /^Bearer\s/;

    if (token && bearerRegex.test(token)) {
        var newToken = token.replace(bearerRegex, '');
        jwt.verify(newToken, cert_pub,
            {
                algorithms: ["RS256", "HS256"],
            },
            (error, decoded) => {
                if (error === null && decoded) {
                    return next();
                }
                return next(req.res.sendStatus(403));
            }
        );
    } else {
        return next(req.res.sendStatus(403));
    }
}

// swaggerRouter configuration
var options = {
    oasSecurity: true,
    securityFile: {
        Bearer: verifyToken
    },
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
