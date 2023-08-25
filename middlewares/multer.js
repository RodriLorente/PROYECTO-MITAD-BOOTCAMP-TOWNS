const multer = require('multer')

//funcion que voy a usar como middleware

let uploadImage = (folder) => {
  const storage = multer.diskStorage({
      destination: `public/images/${folder}`, 
      filename: function (req, file, cb){
          console.log(file);
         
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
          cb(null, uniqueSuffix + '-' + file.originalname);
      }
  })

  //tiene que coincidir con el name en el html 
  const upload = multer ({ storage: storage}).single("img");

  return upload;
}

module.exports = uploadImage;