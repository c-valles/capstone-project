//Importing...
import express from "express";
import axios from "axios";
import Sea from "../Models/Sea";

//Creating Express Router
const router = express.Router();

//Route Fetching Sea Creature from external API
router.get("/seacreatures", async (req, res) => {
    try { 
        const response = await axios.get("https://api.nookipedia.com/nh/sea");
        const Sea = response.data;

        await Sea.deleteMany();
        await Sea.insertMany(Sea);

        res.json({status: "Success!", data: Sea});
    } catch (err) {
        console.error(err);
        res.status(500).json({ Error: "An error occured!"});
    }
});

//Exporting...
export default router;