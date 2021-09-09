const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const RoutePublic = require('./config/route.public')
const RoutePrivate = require('./config/route.private')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(morgan('common'))


app.get('/', (req, res) => {
    res.json("Backend jwt")
})

app.use('/public', RoutePublic.RoutePublic);
app.use('/private', RoutePrivate.RoutePrivate);


app.listen(3000, () => {
    console.log('http://localhost:3000/')
})