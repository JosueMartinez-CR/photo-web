import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken';

interface IPayload{
    _id: string;
    iat: number;
    exp: number;

}

export const tokenValidation = (req:Request,res:Response, next:NextFunction) => {
    try {
        const token = req.header('auth-token');
        
        if (!token) return res.status(401).json('Access Denied');
        
        const payload = jwt.verify(token, process.env.TOKEN_SECRET||"SECRET") as IPayload;
        
        req.userId = payload._id;
        next();

    } catch (e) {
        res.status(400).send('Invalid Token');
    }

}