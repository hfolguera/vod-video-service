var mongoose = require('mongoose');
var Video = mongoose.model('Video');
const { createLogger, format, transports } = require("winston");

const logger = createLogger({
    format: format.combine(format.timestamp(), format.json()),
    transports: [new transports.Console({})],
});

// Get all videos
exports.getVideos = function(req, res) {
    logger.info(req);

    Video.find(function(err, video){
        if(err) res.send(500, err.message);
        res.status(200).jsonp(video);
    });
};

// Get one video by _id
exports.getVideoById = function(req, res) {
    logger.info(req.body);

    Video.findById(req.params.id, function(err, video) {
        if(err) return res.send(500, err.message);
        res.status(200).jsonp(video);
    });
};

// Add video
exports.addVideo = function(req, res) {
    logger.info(req);


    var video = new Video({
        title:     req.body.title,
        user:  req.body.user,
        url:   req.body.url,
        thumbnails:  req.body.thumbnails,
        tags:    req.body.tags
    });

    video.save(function(err, video) {
        if(err) return res.status(500).send( err.message);
        res.status(200).jsonp(video);
    });
};

// Update video
exports.updateVideo = function(req, res) {
    logger.info(req);

    Video.findById(req.params.id, function(err, video) {
        video.title = req.body.title;
        video.user  = req.body.user;
        video.url = req.body.url;
        video.thumbnails = req.body.thumbnails;
        video.tags = req.body.tags;

        video.save(function(err) {
            if(err) return res.status(500).send( err.message);
            res.status(200).jsonp(video);
        });
    });
};

// Delete video
exports.deleteVideo = function(req, res) {
    logger.info(req);

	Video.findById(req.params.id, function(err, video) {
		video.remove(function(err) {
			if(err) return res.send(500, err.message);
            res.status(200);
		})
	});
};