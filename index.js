'use strict';

const mongoose = require('mongoose');
const MONGOOSE_URI = 'mongodb://localhost:27017/lab05';
const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(MONGOOSE_URI, mongooseOptions) ;