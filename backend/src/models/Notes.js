import mongoose from "mongoose";

// 1 - create a schema
// 2 - model based of that schema

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    }, 
    }, {timestamps: true} // createdAt, updatedAt
);

const Note = mongoose.model("Note", notesSchema);

export default Note;