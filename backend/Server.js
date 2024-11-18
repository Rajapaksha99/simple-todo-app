

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000; // Correct casing for 'PORT'

mongoose
  .connect(process.env.MONGODB_URL)
  .then(()=> console.log('connected to mongodb'))

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));


