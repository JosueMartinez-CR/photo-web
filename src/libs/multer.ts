
//Confi multer 

import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
import path from "path";


const storage = multer.diskStorage ({                            //diskStore me permite subir los archivos
    destination: 'photos-uploads',                               //donde se guardarán
    filename: (req,file,cb) => {                                 //Las fotos debemos renombrarlas para que no hayan errores 
        cb(null, uuidv4() + path.extname(file.originalname))     //aplicamos funcion de uuid que genera nombre aleatorio
    }
})

export default multer ({storage});