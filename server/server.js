const express = require('express');
const path = require('path');
const session = require("express-session");
const passport = require("passport");
const cors = require('cors');
const dotenv = require('dotenv').config();
const cookieParser = require("cookie-parser");
const keys = require("./config/keys");
// const connectDB = require('./db/connect')
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;

connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())
// app.get('/', (req, res) =>{
//     res.status(200).send('hello')
// })

// passport Config
require("./config/passport")(passport);

app.use(cookieParser());
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: false,
    })
);

// passport middleware - put session middleware always below cookie parser
app.use(passport.initialize());
app.use(passport.session());

// routers
const authRouter = require("./routes/authRoute");
const tripRouter = require('./routes/tripRoute');

// get router
app.use('/api/travel', tripRouter)
app.use('/api/travel/auth/', authRouter)

app.listen(port, () => console.log(`Server started on port ${port}`));
