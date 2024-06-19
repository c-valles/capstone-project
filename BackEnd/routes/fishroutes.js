import express from 'express';
import axios from 'axios';
import Fish from '../Models/Fish';

const router = express.Router();

router.get('/fishes', async (req, res) => {
    try { 
        const response = await axios.get('https://api.nookipedia.com/nh/fish');
        const fishes = response.data;

        await Fish.deleteMany();
        await Fish.insertMany(fishes);

        res.json({status: 'Success!', data: fishes});
    } catch (err) {
        console.error(err);
        res.status(500).json({ Error: 'An error occured!'});
    }
});

export default router;
