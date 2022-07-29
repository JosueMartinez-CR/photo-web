import {Request,Response} from 'express';
import Admin from '../models/admin';

export async function createAdmin (req:Request, res:Response){
    const {name,username,password} = req.body;
    const newAdmin = {
        name: name,
        username: username,
        password: password
    }

    const admin= new Admin (newAdmin);
    await admin.save();

    return res.json({
        message: 'Admin successfully saved',
        admin


    })
}

export async function getAdmin (req:Request, res:Response): Promise <Response> {
    const admin = await Admin.findById(req.params.id);
    return res.json(admin);

}

export async function DeleteAdmin(req:Request, res:Response):Promise <Response>{

    const admin = await Admin.findByIdAndRemove(req.params.id);
    return res.json({
        message: 'Admin Deleted',
        admin
    })
    
}