# FitAPI

FitAPI is a RESTful API built using Node.js, Express, and MongoDB, following the MVC architecture. It manages two collections in a MongoDB database, handling errors properly and validating each endpoint.

## Features
- Implements **MVC architecture** for better structure.
- Uses **MongoDB** with Mongoose for data modeling.
- Validates requests using **express-validator**.
- Provides API documentation with **Swagger**.
- Manages environment variables with **dotenv**.
- Uses **nodemon** for development ease.


## Dependencies

### Core Dependencies:
- **express** - Web framework for Node.js.
- **mongoose** - MongoDB ODM.
- **dotenv** - Loads environment variables.
- **express-validator** - Middleware for validating request data.

### Development Dependencies:
- **nodemon** - Automatically restarts the server on file changes.
- **swagger-ui-express** - Serves Swagger UI for API documentation.
- **swagger-autogen** - Auto-generates Swagger documentation.

## Running the API
To start the API in development mode:
```sh
npm run dev
```

To start the API in production mode:
```sh
npm start
```


## Video
https://youtu.be/HeZcJ7n-p4g