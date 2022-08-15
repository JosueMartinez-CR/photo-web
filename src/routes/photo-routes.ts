//Rutas de cosulta a nuestra API

import { Router } from "express"; 
import multer from '../libs/multer';
import { createPhoto,getPhotos, getPhoto,DeletePhoto, updatePhoto} from "../controllers/photo.controllers";
import { createAdmin, DeleteAdmin, getAdmin } from "../controllers/admin.controllers";
import { loggin } from "../controllers/auth";
import { tokenValidation } from '../libs/verifyToken';
const router = Router();



router.route('/photos')
    .get(tokenValidation,getPhotos)
    .post(tokenValidation,multer.single('image'),createPhoto)  //cada vez que se suba UNA foto se llamara image


router.route('/photos/:id')
    .get(tokenValidation,getPhoto)
    .delete(tokenValidation,DeletePhoto)
    .put(tokenValidation,updatePhoto)


router.route('/admin')
    .post(createAdmin)

    router.route('/admin/:id')
    .get(getAdmin)
    .put(DeleteAdmin)

router.route('/auth')
    .post(loggin)

    
export default router;