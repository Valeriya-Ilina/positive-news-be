const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = Schema ({
  title: {type: String, required: true},
  author: {type: String},
  url: {type: String},
  description: {type: String},
  urlToImage: {type: String},
  publishedAt: {type: Date}
}, { timestamps: true });

//creating collection/model
const News = mongoose.model('News', newsSchema);

module.exports = News;
