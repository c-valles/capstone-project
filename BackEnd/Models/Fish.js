//Importing...
import mongoose from "mongoose";

//Defining Fish Schema
const FishSchema = new mongoose.Schema({
    name: String,
    number: Number,
    image_url: String,
    render_url: String,
    location: String,
    shadow_size: String,
    rarity: String,
    sell_nook: Number,
    availability: {
        months: [String],
        time: String
    },
    donated: Boolean,
    wished: Boolean,
});

//Exporting...
export default new mongoose.model("Fish",FishSchema);