const multer = require('multer')

//diskstorage(Almacena dentro de la computadora)
//memorystorage(Virtualmente almacena el archivo para usarlo en la nube)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {},
  filename: (req, file, cb) => {},
})

//Storage(Donde almacenar los archivos)---fileFilter(Como administra los archivos, que archvos se pueden guardar)
multer({ storage, fileFilter })
