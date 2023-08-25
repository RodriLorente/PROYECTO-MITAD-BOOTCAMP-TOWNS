const e = require('express');
const connection = require('../config/db');

class PlaceController {


  getNewPlace = (req, res) => {
    let sql = `SELECT id_town, town_name FROM town WHERE town_is_deleted = 0`;

    connection.query(sql, (err, result) => {

      if(err) throw err;
      res.render('formCreatePlace', {result});

    });
  }
  //4.- Metodo post de formulario de creación de punto de interés en vista aparte.
  postNewPlace = (req, res) => {

    
    let {id_town, place_name, address} = req.body;
    console.log(req.body);
    console.log(req.params);
    
    
    let img;
    if(req.file){
      img = req.file.filename;
    }

    let sql = `INSERT INTO place (place_name, address, place_img, id_town) VALUES ('${place_name}', '${address}', '${img}', ${id_town})`;

    
    connection.query(sql, (err, result) => {

      if(err) throw err;

      res.redirect(`/towns/oneTown/${id_town}`);

    });

  }

  //5.-get del formulario de edición de los lugares emblemáticos
  editPlace = (req, res) => {

    let {id_place} = req.params;
    let sql = `SELECT * FROM place WHERE id_place = ${id_place}`;

    connection.query(sql, (err, result) => {
      if(err) throw err;
      res.render('editPlace', {result});
    });
  }

  //6.- post del formulario de edicion de los lugares emblemáticos
  postEditPlace = (req, res) => {

    let {id_place} = req.params;
    let {place_name, address} = req.body;

    let sql = `UPDATE place SET place_name = '${place_name}', address = '${address}' WHERE id_place = ${id_place}`

    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.render('editOK');

    });
    


  }
}

module.exports = new PlaceController;