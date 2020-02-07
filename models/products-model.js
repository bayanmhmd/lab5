const schema = require('../schema/products-schema');
const ModelControl = require('./models.js');

class product extends ModelControl {
  constructor() {
    super(schema);
  }
}



module.exports = product;