# JWT Mongo Server API

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This is a JSON Web Token (JWT) based API server using MongoDB for data storage. The server is designed to handle user authentication and authorization securely.

## Features
- User registration and login
- JWT-based authentication
- Secure password hashing
- CRUD operations for users
- MongoDB integration

## Technologies
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/jwt-mongo-server-api.git
    ```
2. Navigate to the project directory:
    ```sh
    cd jwt-mongo-server-api
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Create a `.env` file and add the following environment variables:
    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

## Usage
1. Start the server:
    ```sh
    npm start
    ```
2. The server will run on `http://localhost:3000`.

## API Endpoints
### Auth
- **POST** `/auth/register` - Register a new user
    - Request Body:
    ```json
    {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "password": "password123"
    }
    ```
- **POST** `/auth/login` - Login a user
    - Request Body:
    ```json
    {
      "email": "john.doe@example.com",
      "password": "password123"
    }
    ```

### Users
- **GET** `/users` - Get all users
- **GET** `/users/:id` - Get user by ID
- **PUT** `/users/:id` - Update user by ID
    - Request Body:
    ```json
    {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "password": "password123"
    }
    ```
- **DELETE** `/users/:id` - Delete user by ID

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.


