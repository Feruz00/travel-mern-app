require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const app = express();

mongoose.connect(
'mongodb://localhost:27017/travel_log'
    , {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
  secret:"our_little secret",
  resave: false,
  saveUninitialized: false
}));

app.use('/uploads', express.static('uploads'));


app.use(passport.initialize());
app.use(passport.session());



app.use('/api/users', require('./routes/user'));

app.listen(3001, () => {
  console.log(`Server started on port 3001`);
});
