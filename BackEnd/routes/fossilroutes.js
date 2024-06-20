import express from "express";
import axios from "axios";
import Fossil from "../Models/Fossils";

const router = express.Router();

router.get('/fossils', async (req, res) => {
    try { 
        const response = await axios.get("https://api.nookipedia.com/nh/fossils/individuals");
        const fossils = response.data;

        await Fossil.deleteMany();
        await Fossil.insertMany(fossils);

        res.json({status: "Success!", data: fossils});
    } catch (err) {
        console.error(err);
        res.status(500).json({ Error: "An error occured!"});
    }
});

export default router;
