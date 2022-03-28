const winston = require("winston");

const logger = winston.createLogger({
    levels: winston.config.npm.levels,
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    transports: [new winston.transports.Console({})],
});

exports.logger = logger;
