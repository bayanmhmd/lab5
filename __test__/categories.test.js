require('@code-fellows/supergoose') ;
const Categories = require('../models/categories-model');
const newCat = new Categories();

describe('Category Model' , ()=> {
  it('can create() new data', () => {
    let object = {name : 'bayan'};
    return newCat.create(object)
      .then( data => {
        
        Object.keys(object).forEach(key => {
          expect(data[key]).toEqual(object[key]);
        });
      });
  });


  it('can read() from DB', () => {
    let object = {name : 'bayan'};
    return newCat.create(object)
      .then( data => {
        
        return newCat.read(data._id)
          .then(data => {
            expect(object.name).toEqual(data.name);
          });
      });
  });


  it('can update() data in the DB', () => {
    let object = {name : 'bayan'};
    let newObject = {name : 'lenna'};

    return newCat.create(object)
      .then( data => {
        
        return newCat.update(data._id , newObject)
          .then(data => {
            expect(newObject.name).toEqual(data.name);
          });
      });
  });

  it('can Delete() data in the DB', () => {
    let object = {name : 'bayan'};
    return newCat.create(object)
      .then( data => {
        return newCat.delete(data._id)
          .then(() => {
            return newCat.read(data._id)
              .then(data => {
                // console.log(data);
                expect(data).toEqual(null);
              });
          });
      });
  });







  
});