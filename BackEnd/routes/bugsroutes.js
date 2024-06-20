import express from "express";
import axios from "axios";
import Bug from "../Models/Bugs";

const router = express.Router();

router.get('/bugs', async (req, res) => {
    try { 
        const response = await axios.get("https://api.nookipedia.com/nh/bugs");
        const bugs = response.data;

        await Bug.deleteMany();
        await Bug.insertMany(bugs);

        res.json({status: "Success!", data: bugs});
    } catch (err) {
        console.error(err);
        res.status(500).json({ Error: "An error occured!"});
    }
});

export default router;