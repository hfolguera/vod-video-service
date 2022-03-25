# vod-video-service
This repository is part of the VOD Demo and stores a backend microservice for managing videos.

This application creates a CRUD REST API for storing Videos on Mongodb.

Technology: NodeJS + Express + Mongodb.

## Local development
```
MONGODB_URL="mongodb://root:*****@mongodb.calfolguera.com:27017/vod-video-service?authSource=admin" node app.js
```

## Application deployment
```
docker build -t video-backend-app .
docker run -it -p 2000:2000 video-backend-app
```

## Next steps
2. Create an Admin API to wipe database, batch-load examples
3. Integrate with Jenkins or other CI/CD
4. Deploy to Kubernetes
