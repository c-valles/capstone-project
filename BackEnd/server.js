import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/Userroutes.js';
import fishRouter from './routes/FishRoutes.js';


dotenv.config();

mongoose.connect(process.env.ATLAS_URI)
const PORT = process.env.PORT || 4000;
const app = express();
const ATLAS_URI = process.env.ATLAS_URI;

//Middleware
app.use(cors());
app.use(express.json());

mongoose.connect(ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connection established successfully.');
});

//Routes
app.get('/',  (req, res) => {
    res.send("Hello")
});

app.use('/fish', fishRouter);

app.use('/user', userRouter)

app.listen(PORT, () => {
    console.log(`Server Listening on PORT:${PORT}`);
});
