/**
 * @swagger
 * /video:
 *   get:
 *     summary: Retrieve a list of videos.
 *     description: Retrieve a list of videos.
 *     responses:
 *       200:
 *         description: A list of videos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The video ID.
 *                         example: 0
 *                       title:
 *                         type: string
 *                         description: The video's title.
 *                         example: Video's title
 *                       uploaddate:
 *                         type: Date
 *                         description: The date in which the video was uploaded.
 *                         example: 01/01/2020
 *                       user:
 *                         type: string
 *                         description: The videos's owner.
 *                         example: test@example.com
 *                       url:
 *                         type: string
 *                         description: URL to the video.
 *                         example: http://cdn.example.com/video1
 *                       thumbnails:
 *                         type: array
 *                         description: Array with a list of the video thumbnail URLs.
 *                       tags:
 *                         type: array
 *                         description: Array with a list of the video's tags.
 */

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