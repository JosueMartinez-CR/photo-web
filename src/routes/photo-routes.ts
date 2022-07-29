//Rutas de cosulta a nuestra API

import { Router } from "express"; 
import multer from '../libs/multer';
import { createPhoto,getPhotos, getPhoto,DeletePhoto, updatePhoto} from "../controllers/photo.controllers";
import { createAdmin, DeleteAdmin, getAdmin } from "../controllers/admin.controllers";

const router = Router();



router.route('/photos')
    .get(getPhotos)
    .post(multer.single('image'),createPhoto)  //cada vez que se suba UNA foto se llamara image


router.route('/photos/:id')
    .get(getPhoto)
    .delete(DeletePhoto)
    .put(updatePhoto)


router.route('/admin')
    .post(createAdmin)

    router.route('/admin/:id')
    .get(getAdmin)
    .put(DeleteAdmin)

    
export default router;