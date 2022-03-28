var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override")
    //mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

// Logger configuration
const logger = require('./config/logger.config').logger;

// Database configuration
require('./config/db.config');

// Models
var models = require('./models/video.model')(app);

// Routes
require('./routes/video.routes')(app,express);

app.listen(2000, function() {
    logger.info("Node server running on http://localhost:2000");
});