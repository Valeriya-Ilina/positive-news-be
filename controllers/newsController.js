const express = require('express');
const news = express.Router();
const News = require('../models/newsModel.js');
const User = require('../models/usersModel.js');

// Get News
news.get('/', (req, res) => {
  User.findById(req.session.currentUser._id, (error, foundUser) => {
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

//Add article to news
news.post('/', (req, res) => {
  News.create(req.body, (error, createdArticle) => {
    if (error) {
      res.status(400).json({error: error.message})
    }
    else {
      User.findById(req.session.currentUser._id, (error, foundUser) => {
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

//Update article
news.put('/:id', (req, res) => {
  News.findByIdAndUpdate(req.params.id, req.body, {new:true},
  (error, updatedArticle) => {
    if (error) {
      res.status(400).json({error: error.message})
    }
    else {
      res.status(200).json({message: `Article ${updatedArticle.title} updated successfully`, data: updatedArticle})
    };
  });
});

//Delete article
news.delete('/:id', (req, res) => {
  News.findByIdAndDelete(req.params.id, (error, deletedArticle) => {
    if(error) {
      res.status(400).json({error: error.message})
    }
    else if (deletedArticle === null) {
      res.status(404).json({message: 'Article is not found'})
    }
    else {
      res.status(200).json({message: `"Article" ${deletedArticle.title} deleted successfully`})
    };
  });
});

module.exports = news
