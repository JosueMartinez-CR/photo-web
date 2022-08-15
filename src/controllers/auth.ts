import {Request,Response} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Admin from '../models/admin';
import { tokenValidation } from '../libs/verifyToken';


export async function loggin (req:Request, res:Response){

   Admin.findOne({email: req.body.email})
   .then(data => {
    console.log(data?.password, req.body.password);
    if (data){
        const passwordValido = bcrypt.compareSync(req.body.password,data.password);
        if(!passwordValido){return res.status(400).json('Usuario o contraseña incorrecta.');
        
        

    }else{
        const token: string = jwt.sign(
            {_id: data?._id},
            process.env.TOKEN_SECRET||"SECRET",
            {expiresIn: '24h'
                    });

        res.header('auth-token', token).json(data);
    }

    }
    else{
        return res.json("Invalida parameters")
    }

   })
}