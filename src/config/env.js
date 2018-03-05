const getEnv = env => process.env[env.toUpperCase()];

module.exports = {

  nodeEnv: getEnv('node_env'),

  port: getEnv('port'),

  loggerFormat: getEnv('logger'),

  mongoUri: getEnv('mongo_url'),

};
