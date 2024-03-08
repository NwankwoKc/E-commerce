const express = require('express');
const app = express.Router();
const controller = require('../RouteController/mainController');
const authController = require('../RouteController/authController');
app.route('/main').get(authController.sessionCheck,controller.get).post(authController.sessionCheck,controller.post);
app.route('/main/:id').get(authController.sessionCheck,controller.getUserdetails)
// app.route('/main/:id').get().post()
// app.route('/main/:id/comment').get().post.patch().delete()

module.exports = app;