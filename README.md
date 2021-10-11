# news-be-express

### API description. What is it? What does it do?
The main use of News API is to search through every article published by over 80,000 news sources and blogs.

### Install dependencies.
`npm install`

### Add `.env` file to the project. Example:
```
PORT=3060
MONGODBURI=mongodb://localhost:27017/newsDB
BASEURL=http://localhost:3000
SECRET=come up with your own secret word
NEWS_API_KEY=get your own API key from newsapi.org
```

### Run the app.
`node server.js`


## REST API

### 1. To Signup Users
#### Request
`POST /users/signup/`
- Request body
```
{
    "username": "...",
    "password": "..."
}
```

#### Response
```
{
    "username": "...",
    "password": "...",
    "news": [],
    "_id": "...",
    "createdAt": "...",
    "updatedAt": "...",
    "__v": 0
}
```

### 2. To Login Users
#### Request
`POST /users/login/`
- Request body
```
{
    "username": "...",
    "password": "..."
}
```
#### Response
```
{
    "_id": "...",
    "username": "...",
    "password": "...",
    "news": [],
    "createdAt": "...",
    "updatedAt": "...",
    "__v": 0
}
```

### 3. To Logout Users
#### Request
`DELETE /logout/`

#### Response
```
{
    "msg": "users logged out"
}
```

### 4. To Get News
#### Request
`GET /news/`

#### Response
```
[
  {
      "_id": "...",
      "title": "...",
      "url": "...",
      "description": "...",
      "urlToImage": "...",
      "publishedAt": "...",
      "createdAt": "...",
      "updatedAt": "...",
      "__v": 0
  },
  {
      "_id": "...",
      "title": "...",
      "author": "...",
      "url": "...",
      "description": "...",
      "urlToImage": "...",
      "publishedAt": "...",
      "createdAt": "...",
      "updatedAt": "...",
      "__v": 0
  }
]
```

### 5. To Create Article
#### Request
`POST /news/`
- Request body
```
{
    "category": "...",
    "language": "...",
    "country": "...",
    "sources": "...",
    "q": "..."
}
```
more info: https://newsapi.org/docs/endpoints/top-headlines/
#### Response
```
[
  {
        "title": "...",
        "url": "...",
        "description": "...",
        "urlToImage": "...",
        "publishedAt": "...",
        "_id": "...",
        "createdAt": "...",
        "updatedAt": "...",
        "__v": 0
    },
    {
        "title": "...",
        "author": "...",
        "url": "...",
        "description": "...",
        "urlToImage": "...",
        "publishedAt": "...",
        "_id": "...",
        "createdAt": "...",
        "updatedAt": "...",
        "__v": 0
    }
]
```

### 6. To Update Article
#### Request
`PUT /news/:id`
- Request body
```
{
    "title": "...",
    "author": "...",
    "url": "...",
    "description": "...",
    "urlToImage": "...",
    "publishedAt": "..."
}
```
#### Response
```
{
    "message": "Article ... updated successfully",
    "data": {
        "_id": "...",
        "title": "...",
        "author": "...",
        "url": "...",
        "description": "...",
        "urlToImage": "...",
        "publishedAt": "...",
        "createdAt": "...",
        "updatedAt": "...",
        "__v": 0
    }
}
```

### 7. To Delete Article
#### Request
`DELETE /news/:id`

#### Response
```
{
    "message": "Article is not found"
}
```
