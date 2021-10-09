const express = require('express');
const news = express.Router();
const News = require('../models/newsModel.js');
const User = require('../models/usersModel.js');

_id = '6161f7026289109fb75cd031'
// Get News
news.get('/', (req, res) => {
  User.findById(_id, (error, foundUser) => {
    if (error) {
      res.status(400),json({error: error.message})
    }
    else {
      News.find({_id: foundUser.news}, (error, foundNews) => {
        if (error) {
          res.status(400).json(error)
        }
        else {
          res.status(200).json(foundNews)
        };
      });
    };
  });
});

// add article to news
news.post('/', (req, res) => {
  News.create(req.body, (error, createdArticle) => {
    if (error) {
      res.status(400).json({error: error.message})
    }
    else {
      User.findById(_id, (error, foundUser) => {
        if (error) {
          res.status(400).json({error: error.message})
        }
        else {
          foundUser.news.push(createdArticle)
          foundUser.save()
          res.status(201).json(createdArticle)
        };
      });
    };
  });
});

module.exports = news
