import mongoose from "mongoose";

export interface Paste extends mongoose.Document {
    name_of_paste: string;
    owner_id: string;
    owner_name: string;
    owner_email: string;
    category: string;
    type_of_file: string;
    code: string;
    expiry: string;
    paste_url: string;
}

const PasteSchema = new mongoose.Schema<Paste>({
    name_of_paste: {type: String ,default: 'Untitled'},
    owner_name: {type:String , default: 'Untitled'},
    owner_id: {type: String , required: true},
    owner_email: {type: String, required: true},
    category: {
        type: String,
        required: [true, "Please Provide a category of this file"]
    },
    type_of_file: {type: String, required: true},
    code: {type: String , required: true},
    expiry: {type: String},
    paste_url: {type: String , required: true}
},{timestamps: true})

export default mongoose.models.Pastes ||
  mongoose.model<Paste>("Pastes", PasteSchema);

