//Importing...
import mongoose from "mongoose";

//Defining Sea Creature Schema
const SeaSchema = new mongoose.Schema({
    name: string,
    image_url: string,
    render_url: string,
    number: number,
    sell_nook: number,
    shadow_size: string,
    shadow_movement: string,
})

//Exporting...
export default new mongoose.model("Sea", SeaSchema);