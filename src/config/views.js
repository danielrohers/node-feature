const fs = require('fs');
const path = require('path');

module.exports = (app) => {
  const views = [path.resolve('src/views')];
  const domains = fs.readdirSync('./src/domain');

  domains.forEach((domain) => {
    views.push(path.resolve(`src/domain/${domain}/views`));
  });

  app.set('views', views);
  app.set('view engine', 'pug');
};
