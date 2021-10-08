// const bcrypt = require('bcrypt');
const express = require('express');
const users = express.Router();
const User = require('../models/usersModel.js');

users.get('/', (req, res) => {
  res.send('Get route is working')
})

module.exports = users;
