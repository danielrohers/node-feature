const FooModel = require('./model');

module.exports = {

  list() {
    return FooModel.find({});
  },

  async create(body) {
    const foo = new FooModel(body);
    return foo.save();
  },

  async findOne(_id) {
    try {
      const foo = await FooModel.findOne({ _id });
      if (!foo) throw { status: 404, message: 'Foo not found.' };
      return foo;
    } catch (err) {
      throw err;
    }
  },

  async update(_id, body) {
    try {
      const foo = await this.findOne(_id);
      foo.name = body.name;
      return foo.save();
    } catch (err) {
      throw err;
    }
  },

  async delete(_id) {
    try {
      const foo = await this.findOne(_id);
      await foo.remove();
      return true;
    } catch (err) {
      throw err;
    }
  },

};
