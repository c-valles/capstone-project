import express from 'express';
import axios from 'axios';
import Fish from '../Models/Fish.js'

const router = express.Router();

router.get('/fish', async (req, res) => {
    try { 
        const response = await axios.get('https://api.nookipedia.com/nh/fish');
        const fishes = response.data;

        await Fish.deleteMany();

        const insertedFishes = await Fish.insertMany(fishes);

        res.json({status: 'Success!', data: insertedFishes});
    } catch (err) {
        console.error(err);
        res.status(500).json({ Error: 'An error occured!'});
    }
});

export default router;
