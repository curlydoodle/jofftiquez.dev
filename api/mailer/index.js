module.exports = function() {

  	var express = require('express');
	var router = express.Router();
	var controller = require('./mailer.controller')();

	router.post('/', controller.index);

    return router;
};
