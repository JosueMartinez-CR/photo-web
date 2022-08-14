import {Request,Response} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Admin from '../models/admin';


export async function loggin (req:Request, res:Response){

   Admin.findOne({email: req.body.email})
   .then(data => {
    console.log(data?.password, req.body.password);
    if (data){
        const passwordValido = bcrypt.compareSync(req.body.password,data.password);
        if(!passwordValido){return res.status(400).json({error:'ok', msj:'Usuario o contraseña incorrecta.'})
                
    }else{
        return res.json("Correct password!")
    }

    }
    else{
        return res.json("Invalida parameters")
    }

   })
}