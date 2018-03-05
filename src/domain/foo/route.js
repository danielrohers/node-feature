const express = require('express');
const controller = require('./controller');

const router = express.Router();

router
  .route('/')
  .get(controller.renderIndex)
  .post(controller.create);

router
  .route('/list')
  .get(controller.list);

router
  .route('/:id')
  .get(controller.findOne)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
