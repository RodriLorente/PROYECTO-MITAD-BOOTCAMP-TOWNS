const connection = require('../config/db');
const bcrypt = require('bcrypt');


class TownController {

  viewTowns = (req, res) => {

    res.send("esta será la vista de Towns")

  }

  //2.- método para ver el formulario de creación de Localidades
  viewCreateTown = (req, res) => {

    res.render('formNewTown');

  }
  //3.- método post del formulario de creación de localidades
  postNewTown = (req, res) => {

    const {town_name, province, email, password, description, phone_number} = req.body;
    
    const salt = 10;

    if(town_name === "" ||
      province === "" ||
      email === "" ||
      password === "" ||
      description === "" ||
      phone_number === ""){

        return res.render('formNewTown', {message: "debes rellenar todos los campos"});
      }

      bcrypt.hash(password, salt, (err, hash) => {
        if(err) throw err;
        const img = req.file.filename;
        let sql = `INSERT INTO town (town_name, province, email, password, description, phone_number, town_img) VALUES ('${town_name}', '${province}', '${email}', '${hash}','${description}', '${phone_number}', '${img}')`

        connection.query(sql, (err, result) => {

          if(err){

            if(err.code == 'ER_DUP_ENTRY'){
              return res.render('formNewTown', {message: "El email ya existe"})
            }else{
              console.log(err);
              return res.render('formNewTown', {message: "ups, hay algún problema"})
            }
          }

          res.render('registerOK')

        });


      });

  }

  viewOneTown = (req, res) => {

    let {id_town} = req.params;
    let sql = `SELECT * FROM town WHERE id_town = ${id_town}`;
    let sqlPlaces = `SELECT * FROM place WHERE id_town = ${id_town} AND place_is_deleted = 0`;

    connection.query(sql, (err, resultTown) => {
      if(err) throw err;
      connection.query(sqlPlaces, (err2, resultPlace) => {
        if(err2) throw err2;
        res.render('oneTown', {resultTown, resultPlace});

      });

    })

  }
}

module.exports = new TownController;