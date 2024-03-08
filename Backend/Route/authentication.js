const express = require('express');
const app = express.Router();
const controller = require('../RouteController/authController');

// app.route('/').get().post();
app.route('/login').post(controller.login);
app.route('/signup').post(controller.sign);
app.route('/chang eName').patch(controller.changeName);
app.route('/changePassword').patch(controller.changePassword);
app.route('/forgotPassword').patch(controller.forgotPassword);
app.route('resetpassword/:token').patch()

// app.route('/forgotpassword').post();

module.exports = app;