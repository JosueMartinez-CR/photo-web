import {Request,Response} from 'express';
import Photo from '../models/photo';
import path from 'path';
import fs from 'fs-extra';



export async function createPhoto (req:Request, res:Response){
 
    const {title,description} = req.body;

    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file?.path,

    }

    const photo = new Photo (newPhoto);
    await photo.save();

    return res.json({
        message: 'Photo successfully saved',
        photo


    })
}

export async function getPhotos (req:Request, res:Response): Promise <Response> {
    const photos = await Photo.find();
    return res.json(photos);

}

export async function getPhoto (req:Request, res:Response): Promise <Response> {
    const photo = await Photo.findById(req.params.id);
    return res.json(photo);

}

export async function DeletePhoto(req:Request, res:Response):Promise <Response>{

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