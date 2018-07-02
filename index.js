
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
require('./services/passport');
require('./models/user');
require('dotenv').config()
const keys = require('./config/keys');

mongoose.connect(`mongodb://${keys.mongoUser}:${keys.mongoPass}@ds139219.mlab.com:39219/emailey-dev`)

const app = express();
const port = process.env.PORT || 5000;

app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.listen(port, ()=> console.log(`App started on port ${port}`));

