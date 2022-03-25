var mongoose = require('mongoose');
var Video = mongoose.model('Video');

// Get all videos
exports.getVideos = function(req, res) {
    console.log('GET /video');

    Video.find(function(err, video){
        if(err) res.send(500, err.message);
        res.status(200).jsonp(video);
    });
};

// Get one video by _id
exports.getVideoById = function(req, res) {
    console.log('GET /video' + req.params.id);

    Video.findById(req.params.id, function(err, video) {
        if(err) return res.send(500, err.message);
        res.status(200).jsonp(video);
    });
};

// Add video
exports.addVideo = function(req, res) {
    console.log('POST /video');
    console.log(req.body);

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
    console.log('PUT /video' + req.params.id);
    console.log(req.body);

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
    console.log('DELETE /video' + req.params.id);

	Video.findById(req.params.id, function(err, video) {
		video.remove(function(err) {
			if(err) return res.send(500, err.message);
            res.status(200);
		})
	});
};