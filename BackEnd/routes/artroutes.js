import express, {Router} from 'express';
import axios from 'axios';

import Art from '../Models/Art';


const router = express.Router();

router.get('/art', async (req, res) => {
    try { 
        const response = await axios.get('https://api.nookipedia.com/nh/art');
        const artwork = response.data;

        await Art.deleteMany();
        await Art.insertMany(artwork);

        res.json({status: 'Success!', data: artwork});
    } catch (err) {
        console.error(err);
        res.status(500).json({ Error: 'An error occured!'});
    }
});

export default router;