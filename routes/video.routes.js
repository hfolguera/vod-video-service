module.exports = (app,express) => {
    var VideoController = require('../controllers/video.controller');
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
};