require('dotenv').config();

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');
const log = require('winston');

require('./src/config/database');
const env = require('./src/config/env');
const routes = require('./src/config/routes');
const views = require('./src/config/views');

const { loggerFormat, port } = env;

const app = express();

app.use(logger(loggerFormat));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'src/assets/scss'),
  dest: path.join(__dirname, 'public/stylesheets'),
  debug: true,
  prefix: '/stylesheets',
  outputStyle: 'compressed',
}));
app.use(express.static(path.join(__dirname, 'public')));

routes(app);
views(app);

app.set('port', port);
app.listen(app.get('port'), () => log.info(`Server listening on port ${app.get('port')}`));

module.exports = app;
