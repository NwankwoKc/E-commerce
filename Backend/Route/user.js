const express = require('express');
const app = express.Router();
const controller = require('../RouteController/userController');
const multer = require('multer');
const image = multer({
    dest:'public/img/users'
})
app.route('/').get(controller.get).post(controller.post);
app.route('/:id').get(controller.getSpecific);
app.route('/update').patch(image.single('photo'),controller.update);

// app.route('cart/:id').get();

module.exports = app;