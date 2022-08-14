import { Schema,model,Document} from "mongoose";

const schema = new Schema ({
    name: String,
    email: String,
    password: String,
})

interface IAdmin extends Document {
    name: string,
    email: string,
    password: string,
}

export default model <IAdmin>('Admin',schema);