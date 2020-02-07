require('@code-fellows/supergoose') ;
const Categories = require('../models/categories-model.js');
const categories = new Categories();

describe('Category Model' , ()=> {
  it(' create() new data', () => {
    let object = {name : 'bayan'};
    return categories.create(object)
      .then( data => {
        
        Object.keys(object).forEach(key => {
          expect(data[key]).toEqual(object[key]);
        });
      });
  });


  it(' read() from DB', () => {
    let object = {name : 'bayan'};
    return categories.create(object)
      .then( data => {
        
        return categories.read(data._id)
          .then(data => {
            expect(object.name).toEqual(data.name);
          });
      });
  });


  it('update() data in the DB', () => {
    let object = {name : 'bayan'};
    let newObject = {name : 'lenna'};

    return categories.create(object)
      .then( data => {
        
        return categories.update(data._id , newObject)
          .then(data => {
            expect(newObject.name).toEqual(data.name);
          });
      });
  });

  it(' Delete() data in the DB', () => {
    let object = {name : 'bayan'};
    return categories.create(object)
      .then( data => {
        return categories.delete(data._id)
          .then(() => {
            return categories.read(data._id)
              .then(data => {
                // console.log(data);
                expect(data).toEqual(null);
              });
          });
      });
  });







  
});