import mongoose, { Schema } from "mongoose";

const Task = new Schema({
    title: String,
    description: String
});


export default mongoose.model('Task', Task);