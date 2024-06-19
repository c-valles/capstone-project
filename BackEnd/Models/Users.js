import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8, 
        maxLength: 12
    }
});

export default new mongoose.model('User', userSchema);