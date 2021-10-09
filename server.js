require('dotenv').config();
const PORT = process.env.PORT;
const BASEURL = process.env.BASEURL;
const mongodbURI = process.env.MONGODBURI
const express = require('express')
const session = require('express-session')
const app = express()

// const cors = require('cors')
//
// const whitelist = [BASEURL]
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   credentials: true
// }
//
// app.use(cors(corsOptions)) // all routes are now exposed

//Setup Mongoose
const mongoose = require('mongoose');

// include the method-override package
const methodOverride = require('method-override')

app.use(methodOverride('_method'))


//middleware
app.use(express.json()); //use .json(), not .urlencoded()


// set up connection with the DB
mongoose.connect(mongodbURI,{
	useNewUrlParser:true,
	useUnifiedTopology: true
});

// set up listeners to monitor your database connection
const db = mongoose.connection;
db.once('open', ()=> console.log('DB connected...'));
db.on('error', (err)=> console.log(err.message));
db.on('disconnected', ()=> console.log('mongoose disconnected'));

// MIDDLEWARES
app.use(express.json());

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
)

// const isAuthenticated = (req, res, next) => {
//     if (req.session.currentUser) {
//         return next()
//     } else {
//         res.status(403).json({msg:"loging require"})
//     }
// }

//controllers
app.use('/search', require('./controllers/searchController'))
app.use('/users', require('./controllers/userController'))
app.use('/news', require('./controllers/newsController'))


app.listen(PORT, () => {
	console.log('Server is listening on port', PORT)
})
