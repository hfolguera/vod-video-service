var mongoose = require('mongoose');

const logger = require('./logger.config').logger;


// Read environment variables
var MONGODB_URL = process.env['MONGODB_URL'];
var MONGODB_USER = process.env['MONGODB_USER'];
var MONGODB_PASSWORD = process.env['MONGODB_PASSWORD'];

// Database connection
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, user: MONGODB_USER, pass: MONGODB_PASSWORD}, function(err, res) {
    if (err) {
        logger.info('ERROR: connecting to Database. ' + err); // TODO: Fix logger.fatal is not a function error
    } else {
        logger.info('Connected to Database.');
    }
});