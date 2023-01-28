const db =  require('../utils/database');
const initModels = require ('./init-models');

const models = initModels(db);

db.sync({ force: true })
  .then(() => console.log('bd sincronnizada'))
  .catch(error => console.log(error));


module.exports = models;

