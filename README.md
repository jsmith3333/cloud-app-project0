# Cloud Application Project

## Description
This is a Node.js web application built using Express, EJS, and MongoDB Atlas. The application now demonstrates basic database interaction by displaying tasks fetched from MongoDB. It is designed for deployment using Render.

## Technologies Used
- Node.js
- Express.js
- EJS
- MongoDB Atlas
- `express-session` for session management
- GitHub
- Render

## Installation Steps

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5050
   SESSION_SECRET=a_long_random_string_for_session_encryption
   ```
   Replace `your_mongodb_connection_string` with your actual MongoDB Atlas connection string.
4. Seed the database with sample tasks (optional, but recommended for initial setup):
   ```bash
   npm run seed
   ```
5. Run the application:
   ```bash
   node server.js
   ```
6. Open your browser to:
   ```
   http://localhost:5050
   ```

## Deployment
This application is configured for deployment using Render with continuous deployment enabled.

## Author
Walter Malie
