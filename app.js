var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

const { createLogger, format, transports } = require("winston");

const logger = createLogger({
    format: format.combine(format.timestamp(), format.json()),
    transports: [new transports.Console({})],
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

// Read environment variables
var MONGODB_URL = process.env['MONGODB_URL']

// Database connection
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, res) {
    if (err) {
        logger.fatal('ERROR: connecting to Database. ' + err);
    } else {
        logger.info('Connected to Database.')
    }
});

// Models
var models = require('./models/video')(app,mongoose);

// Controllers
var VideoController = require('./controllers/video');
var video = express.Router();

video.route('/video')
    .get(VideoController.getVideos)
    .post(VideoController.addVideo);

video.route('/video/:id')
    .get(VideoController.getVideoById)
    .put(VideoController.updateVideo)
    .delete(VideoController.deleteVideo);

app.use('/api', video);

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});

app.use(router);


app.listen(2000, function() {
    logger.info("Node server running on http://localhost:2000");
});