// make the necessary imports here
import mongoose from 'mongoose';
// implement the below schema

const userSchema = new mongoose.Schema({
    username: String,
    room: String,
});


export const userModel = mongoose.model('User', userSchema);