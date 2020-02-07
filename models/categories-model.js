'use strict';

const schema = require('../schema/categories-schema.js');
const ModelControl = require('../models.js');

class Categorie extends ModelControl {
  constructor() {
    super(schema);
  }
}



module.exports = Categorie;