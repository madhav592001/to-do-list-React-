import mongoose from 'mongoose' ; 

const todoSchema = mongoose.Schema({
    "title": String , 
    "desc": String
});

export default mongoose.model('todo',todoSchema) ;