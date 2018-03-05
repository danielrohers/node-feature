const FooService = require('./service');

module.exports = {

  renderIndex(req, res) {
    res.render('home-index', { title: 'Express Foo' });
  },

  list(req, res, next) {
    FooService
      .list()
      .then(data => res.status(200).json({ success: true, data }))
      .catch(next);
  },

  create(req, res, next) {
    FooService
      .create(req.body)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(next);
  },

  findOne(req, res, next) {
    FooService
      .findOne(req.params.id)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(next);
  },

  update(req, res, next) {
    FooService
      .update(req.params.id, req.body)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(next);
  },

  delete(req, res, next) {
    FooService
      .delete(req.params.id)
      .then(() => res.status(200).json({ success: true }))
      .catch(next);
  },

};
