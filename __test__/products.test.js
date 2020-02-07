'use strict';
require('@code-fellows/supergoose') ;
const Products = require('../models/products-model');
const newProduct = new Products();

describe('Category Model' , ()=> {
  it('can create() new data', () => {
    let object = {name : 'sony' , price : 550 , weight: 25 , quantity_in_stock: 95};
    return newProduct.create(object)
      .then( data => {        
        Object.keys(object).forEach(key => {
          expect(data[key]).toEqual(object[key]);
        });
      });
  });


  it('can read() from DB', () => {
    let object = {name : 'sony' , price : 550 , weight: 25 , quantity_in_stock: 95};
    return newProduct.create(object)
      .then( data => {
        
        return newProduct.read(data._id)
          .then(data => {
            expect(object.name).toEqual(data.name);
          });
      });
  });


  it('can update() data in the DB', () => {
    let object = {name : 'sony' , price : 550 , weight: 25 , quantity_in_stock: 95};
    let newObject = {name : 'apple' , price : 700 , weight: 20 , quantity_in_stock: 100};

    return newProduct.create(object)
      .then( data => {
        
        return newProduct.update(data._id , newObject)
          .then(data => {
            expect(newObject.name).toEqual(data.name);
          });
      });
  });

  it('can Delete() data in the DB', () => {
    let object = {name : 'sony' , price : 550 , weight: 25, quantity_in_stock: 95};
    return newProduct.create(object)
      .then( data => {
        return newProduct.delete(data._id)
          .then(() => {
            return newProduct.read(data._id)
              .then(data => {
                // console.log(data);
                expect(data).toEqual(null);
              });
          });
      });
  });







  
});