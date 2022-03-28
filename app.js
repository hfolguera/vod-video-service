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
var models = require('./models/video.model')(app); // Needed?

// Routes
require('./routes/video.routes')(app,express);
// Controllers
// var VideoController = require('./controllers/video.controller');
// var video = express.Router();

// video.route('/video')
//     .get(VideoController.getVideos)
//     .post(VideoController.addVideo);

// video.route('/video/:id')
//     .get(VideoController.getVideoById)
//     .put(VideoController.updateVideo)
//     .delete(VideoController.deleteVideo);

// app.use('/api', video);

// var router = express.Router();

// router.get('/', function(req, res) {
//    res.send("Hello World!");
// });

// app.use(router);


app.listen(2000, function() {
    logger.info("Node server running on http://localhost:2000");
});