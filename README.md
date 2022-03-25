# vod-video-service
This repository is part of the VOD Demo and stores a backend microservice for managing videos.

This application creates a CRUD REST API for storing Videos on Mongodb.

Technology: NodeJS + Express + Mongodb.

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
1. Deploy to Kubernetes
1. Automate tests
