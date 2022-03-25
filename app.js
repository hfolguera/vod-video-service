var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

// Read environment variables
var MONGODB_URL = process.env['MONGODB_URL']

// Database connection
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, res) {
    if (err) {
        console.log('ERROR: connecting to Database. ' + err);
    } else {
        console.log('Connected to Database. ');
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
    console.log("Node server running on http://localhost:2000");
});