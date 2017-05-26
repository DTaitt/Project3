const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();

const app = express();

    
const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(logger('dev'));
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/',function(req,res){
  res.sendFile(__dirname + '/public/index.html');
});

const locationRoutes = require('./routes/locationRoutes');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users')

app.use('/api/location', locationRoutes);
app.use('/api/location/reviews', locationRoutes);
app.use('/auth',authRoutes);

//bronx routes
app.use('/api/location/bronxfood',locationRoutes);
app.use('/api/location/bronxfashion',locationRoutes);
app.use('/api/location/bronxnight',locationRoutes);

//brooklyn routes
app.use('/api/location/brooklynfood',locationRoutes);
app.use('/api/location/brooklynfashion',locationRoutes);
app.use('/api/location/brooklynnight',locationRoutes);

//manhattan routes
app.use('/api/location/manhattanfood',locationRoutes);
app.use('/api/location/manhattanfashion',locationRoutes);
app.use('/api/location/manhattannight',locationRoutes);

//queens routes
app.use('/api/location/queensfood',locationRoutes);
app.use('/api/location/queensfashion',locationRoutes);
app.use('/api/location/queensnight',locationRoutes);

//staten island routes
app.use('/api/location/sifood',locationRoutes);
app.use('/api/location/sifashion',locationRoutes);
app.use('/api/location/sinight',locationRoutes);


app.get('*',function(req,res){
  res.status(404).send({message: 'Opps! Not found.'})
})