
const connection = require('../config/db');

class PlaceController {

  //2.- metodo para borrado de la BD de los lugares emblemáticos

  deletePlaces = (req, res) => {
    let {id_place, id_town} = req.params;
    let sql = `DELETE FROM place WHERE id_place = ${id_place}`;

    connection.query(sql, (err, result) =>{
      if (err) throw err;
      res.render('delOK', {id_town});
    })
  }

  //3.- Creación de un nuevo lugar emblemático en una vista aparte
  getNewPlace = (req, res) => {
    let {id_town} = req.params;
      res.render('formCreatePlace', {id_town});

    
  }
  //4.- Metodo post de formulario de creación de punto de interés en vista aparte.
  postNewPlace = (req, res) => {

    
    let {place_name, address} = req.body;

    let {id_town} = req.params;
    
    
    let img;
    if(req.file){
      img = req.file.filename;
    }

    let sql = `INSERT INTO place (place_name, address, place_img, id_town) VALUES ('${place_name}', '${address}', '${img}', ${id_town})`;

    if(place_name == "" || address == "" || req.file == undefined){
      return res.redirect(`/towns/oneTown/${id_town}?form=error`)
  }
    
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

    let {id_place, id_town} = req.params;
    let {place_name, address} = req.body;

    let sql = `UPDATE place SET place_name = '${place_name}', address = '${address}' WHERE id_place = ${id_place}`

    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.render('editOK', {id_town});

    });
    


  }
}

module.exports = new PlaceController;