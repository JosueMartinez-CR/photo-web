
import { Schema, model, Document } from "mongoose";

const TagSchema = new Schema({
    name:String,
    description:String
})

interface ITag extends Document{
    name: string,
    description:string
}

export default model <ITag> ('Tag',TagSchema);