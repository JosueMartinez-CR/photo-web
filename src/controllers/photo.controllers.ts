import {Request,Response} from 'express';
import Photo from '../models/photo';
import path from 'path';
import fs from 'fs-extra';
import admin from '../models/admin';


export async function createPhoto (req:Request, res:Response){
    
    const user = await admin.findById(req.userId, { password: 0 });
    if (!user) {
        return res.status(404).json('No User found');
    }

    const {title,tag,description} = req.body;

    const newPhoto = {
        title: title,
        tag: tag,
        description: description,
        imagePath: req.file?.path
    }

    if (tag){
        const photo = new Photo (newPhoto);
        await photo.save();

    return res.json({
        message: 'Photo successfully saved',
        photo
    })

    }
    else{

        return res.json({
            message: 'We need a tag!'

    })
    
}
}

export async function getPhotos (req:Request, res:Response): Promise <Response> {
    
    const user = await admin.findById(req.userId, { password: 0 });
    if (!user) {
        return res.status(404).json('No User found');
    }

    const photos = await Photo.find();
    return res.json(photos);

}

export async function getPhoto (req:Request, res:Response): Promise <Response> {
    const user = await admin.findById(req.userId, { password: 0 });
    if (!user) {
        return res.status(404).json('No User found');
    }

    const photo = await Photo.findById(req.params.id);
    return res.json(photo);

}

export async function DeletePhoto(req:Request, res:Response):Promise <Response>{

    const user = await admin.findById(req.userId, { password: 0 });
    if (!user) {
        return res.status(404).json('No User found');
    }

    const photo = await Photo.findByIdAndRemove(req.params.id);

    if (photo){
        await fs.unlink(path.resolve(photo.imagePath))
    }
    return res.json({
        message: 'Photo Deleted',
        photo
    })
    
}

export async function updatePhoto(req:Request, res:Response):Promise <Response> {
    const user = await admin.findById(req.userId, { password: 0 });
    if (!user) {
        return res.status(404).json('No User found');
    }

    const {title,description}=req.body;
    const updatedPhoto = await Photo.findByIdAndUpdate(req.params.id, {
        title,
        description
    }, {new: true});
    return res.json({
        message: 'Succesfully uptadeted',
        updatedPhoto
    })


    
}