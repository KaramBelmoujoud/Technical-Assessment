# Running the Backend Server

This document provides instructions on how to run the backend server for this application.

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v12.0.0 or later)
- [npm](https://www.npmjs.com/get-npm) (v6.0.0 or later)

## Steps

1. **Clone the repository**

   Clone the repository to your local machine. You can do this by running the following command in your terminal:

   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**

   Navigate to the project directory and install the necessary dependencies by running:

   ```bash
   cd <project-directory>
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root of your project directory and add your environment variables. For example:

   ```env
   PORT=5000
   ```

   Replace `5000` with the port you want the server to run on.

4. **Start the server**

   Start the server by running the following command in your terminal:

   ```bash
   node server.js
   ```

   You should see a message like `Server started on port 5000`, indicating that the server is running.

## Testing the Server

You can run a unit test using the following command in your terminal

```bash
npm test
```

You can test if the server is running by visiting `http://localhost:5000` in your web browser, or by using a tool like [Postman](https://www.postman.com/) to send a request to `http://localhost:5000`.

Remember to replace `5000` with the port you specified in your `.env` file.
