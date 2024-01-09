// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const usersRoute = require('./routes/usersRoute');

dotenv.config(); // Load environment variables from .env
const app = express();

app.use(cors());
app.use(usersRoute);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
