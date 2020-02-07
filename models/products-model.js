'use strict';
const schema = require('../schema/products-schema.js');
const ModelControl = require('../models.js');

class product extends ModelControl {
  constructor() {
    super(schema);
  }
}



module.exports = product;