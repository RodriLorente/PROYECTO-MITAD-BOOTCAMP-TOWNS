const connection = require('../config/db');

class IndexController{
  //1.- Abre el index, pero muestra también los datos de las localidades
  viewIndex = (req, res) => {
    let sql = `SELECT * FROM town WHERE town_is_deleted = 0`;

    connection.query(sql, (err, result) => {
      res.render('index', {result});
    });
    

  }
}

module.exports = new IndexController;