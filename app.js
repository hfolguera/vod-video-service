var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");

const port = 2000

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

// Swagger configuration
const {swaggerUi, swaggerSpecs} = require('./config/swagger.config');

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs, { explorer: true })
);

app.listen(port, function() {
    logger.info("Node server running on http://localhost:" + port);
});

module.exports = app;