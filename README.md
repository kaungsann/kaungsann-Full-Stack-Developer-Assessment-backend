Node.js Backend API
This project is a backend API built using Node.js and Express, designed with clean code principles and organized in a modular folder structure to ensure scalability, maintainability, and readability.

Features
Dependencies
bcryptjs: Hashes passwords for secure storage.
compression: Compresses HTTP responses to reduce bandwidth.
cors: Manages Cross-Origin Resource Sharing to allow safe API access.
cross-env: Simplifies setting environment variables.
dotenv: Loads environment variables from a .env file.
express: Web framework for creating routes and handling HTTP requests.
express-mongo-sanitize: Sanitizes data to prevent MongoDB injection attacks.
express-rate-limit: Protects against DDoS by limiting repeated requests.
express-session: Manages session data for user authentication.
helmet: Adds security headers to HTTP responses.
http-status: Defines standard HTTP status codes for consistency.
joi: Validates request data for schemas.
jsonwebtoken: Generates and verifies JWT tokens for authentication.
moment: Formats dates and times.
mongoose: Connects and manages MongoDB database schemas.
morgan: Logs HTTP requests.
nodemon: Automatically restarts the server during development.
passport, passport-jwt, passport-local: Implements authentication strategies, including JWT for secure token-based login.
socket.io: Enables real-time, bidirectional communication.
validator: Validates and sanitizes strings.
winston: Logs application events.
xss-clean: Protects against cross-site scripting attacks.
Folder Structure
The project is organized in a modular structure for better scalability and clean code practices:

src
├── config # Configuration files (e.g., environment variables, passport config)
├── controllers # Business logic and request handling
├── models # Mongoose schemas and models
├── routes # Route definitions and API endpoints
├── validations # Joi schemas for validating request payloads
├── services # Service layer for database interactions and complex logic
├── middlewares # Express middleware for security, error handling, and logging
├── utils # Utility functions and helpers
└── app.js # Application entry point

Key Concepts
Clean Code: Code follows best practices to maintain readability, modularity, and scalability.
Security: Implemented through libraries like helmet, express-mongo-sanitize, express-rate-limit, and xss-clean.
Authentication: Uses passport with JWT for token-based login
Validation: Ensures data integrity through joi validation schemas.
Logging: Tracks application events with morgan for request logging and winston for error and system logging.
Getting Started
Prerequisites
Node.js (version 14 or higher recommended)
MongoDB (for database management)
Installation
Clone the repository.
Install dependencies:
bash
Copy code
npm install
Set up environment variables:
Create a .env file in the root directory and define the necessary variables (e.g., database connection, JWT secret).
