import express from "express";
import axios from "axios";
import Sea from "../Models/Sea";


const router = express.Router();

router.get("/seacreatures", async (req, res) => {
    try { 
        const response = await axios.get("https://api.nookipedia.com/nh/sea");
        const artwork = response.data;

        await Sea.deleteMany();
        await Sea.insertMany(artwork);

        res.json({status: "Success!", data: artwork});
    } catch (err) {
        console.error(err);
        res.status(500).json({ Error: "An error occured!"});
    }
});

export default router;