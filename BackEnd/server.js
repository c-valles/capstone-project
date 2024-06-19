import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/Userroutes.js';

dotenv.config()

mongoose.connect(process.env.ATLAS_URI)
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',  (req, res) => {
    res.send("Hello")
});

app.use('/user', userRouter)

app.listen(PORT, () => {
    console.log(`Server Listening on PORT:${PORT}`);
});
