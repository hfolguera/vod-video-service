var swaggerJsdoc = require("swagger-jsdoc"),
    swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "vod-video-service API reference",
            version: "0.1.0",
            description:
                "Swagger configuration for vod-video-service",
            license: "",
        },
        servers: [
            {
                url: "http://localhost:2000",
            },
        ],
    },
    apis: ["./routes/video.routes.js"],
};

const swaggerSpecs = swaggerJsdoc(options);

exports.swaggerSpecs = swaggerSpecs;
exports.swaggerUi = swaggerUi; 