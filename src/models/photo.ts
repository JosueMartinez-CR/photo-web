import { Schema,model,Document} from "mongoose";

const schema = new Schema ({
    title: String,
    description: String,
  /*  tag:{
        type: Schema.Types.ObjectId, ref: 'tag'
    },*/
    imagePath: String
})

interface IPhoto extends Document {
    title: string;
    description: string;
    //tag: String,  
    imagePath: string;
}

export default model <IPhoto>('Photo',schema);required: true