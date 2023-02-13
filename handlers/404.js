'use strict';

module.exports = (req, res, next) => {
  req.status(404).send({
    error: 404,
    route: req.baseUrl,
    message: 'not found',
  });
};