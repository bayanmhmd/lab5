const schema = require('../schema/categories-schema');
const ModelControl = require('./models.js');

class Categorie extends ModelControl {
  constructor() {
    super(schema);
  }
}



module.exports = Categorie;