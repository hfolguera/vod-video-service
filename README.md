# vod-video-service
This repository is part of the VOD Demo and stores a backend microservice for managing videos.

This application creates a CRUD REST API for storing Videos on Mongodb.

Technology: NodeJS + Express + Mongodb.

## Requirements
Mongodb

## CI/CD Workflow
`TODO`


## Local development
```
MONGODB_URL="mongodb://root:*****@mongodb.calfolguera.com:27017/vod-video-service?authSource=admin" node app.js
```

## Application build
```
docker build -t vod-video-service .
```

## Next steps
1. Create an Admin API to wipe database, batch-load examples
1. Automate tests
1. Improve error management: Dont return error code but a generic message, log detailed error, improve handler
1. Add Swagger (https://medium.com/sahibinden-technology/simple-dockerized-crud-node-js-web-app-unit-tests-b937a622f16a)