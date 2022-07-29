import { Schema,model,Document} from "mongoose";

const schema = new Schema ({
    name: String,
    username: String,
    password: String,
})

interface IAdmin extends Document {
    name: string,
    username: string,
    password: string,
}

export default model <IAdmin>('Admin',schema);