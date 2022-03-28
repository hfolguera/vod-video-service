var mongoose = require('mongoose');

//const logger = require('./logger.config').logger;
const logger = require('./logger.config').logger;


// Read environment variables
var MONGODB_URL = process.env['MONGODB_URL'];

// Database connection
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, res) {
    if (err) {
        logger.fatal('ERROR: connecting to Database. ' + err);
    } else {
        logger.info('Connected to Database.');
    }
});