//Importing...
import mongoose from "mongoose";

//Defining Bug Schema
const BugSchema = new mongoose.Schema({
    name: String,
    number: Number,
    image_url: String,
    render_url: String,
    location: String,
    rarity: String,
    total_catch: Number,
    sell_nook: Number,
    availabilty: {
        months: [String],
        time: String
    },
    donated: Boolean,
    wished: Boolean
})

//Exporting...
export default new mongoose.model("Bug",BugSchema);