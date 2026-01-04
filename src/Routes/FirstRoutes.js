const express = require('express');
const firstcontroller = require("../Controllers/FirstController");

const route = express.Router();
route.get('/get-data',firstcontroller.x);

module.exports = route;