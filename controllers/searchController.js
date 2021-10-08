const express = require('express')
const search = express.Router()
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

// To query top headlines
search.post('/', async (req, res) => {
  console.log("search post route is working")
  newsapi.v2.topHeadlines({
    q: 'disney',
    category: 'entertainment',
    language: 'en',
    country: 'us'
  }).then(response => {
    const returnObject = {
      topHeadlines: response
    }
    res.status(200).json(returnObject)
  });
})


module.exports = search
