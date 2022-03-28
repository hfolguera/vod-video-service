const mongoose = require('mongoose');

exports = module.exports = function(app) {

	var videoSchema = new mongoose.Schema({
        title:  { type: String },
        uploaddate: { type: Date, default: Date.now },
        user: {type: String },
        url:    { type: String },
        thumbnails: { type: Array },
        tags:   { type: Array }
    });

	mongoose.model('Video', videoSchema);

};  