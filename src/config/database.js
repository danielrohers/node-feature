const mongoose = require('mongoose');
const log = require('winston');
const env = require('./env');

const { nodeEnv, mongoUri } = env;

if (nodeEnv !== 'production') mongoose.set('debug', true);

mongoose.connect(mongoUri);

const db = mongoose.connection;

db.on('error', err => log.error('Connection error:', err.message));
db.once('open', () => log.info('Connected to MongoDB'));

module.exports = mongoose;
