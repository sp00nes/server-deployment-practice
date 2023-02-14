'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const notFound = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');
const PORT = process.env.PORT || 3001;

// creates an express singleton
const app = express();

//app.use uses all the crud verbs
// app.use(express.json());

// app.use(logger);

app.get('/', logger, (req, res, next) => {
  res.status(200).send(req.log);
});

app.get('/bad', (req, res, next) => {
  // throw new Error('we have an error');
  next('we have an error');
});

app.use('*', notFound);
app.use(errorHandler);


//crate callback that gets called in index
const start = () => {
  app.listen(PORT, () => console.log('server running on port 3001'));
};

module.exports = {start, app};
// exports start to run the server and app to test the server
