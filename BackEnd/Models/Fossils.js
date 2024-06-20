//Importing
import mongoose from "mongoose";

//Defining Fossil Schema
const FossilSchema = new mongoose.Schema({
    name: String,
    image_url: String,
    fossil_group: String,
    sell: Number,
    donated: Boolean,
    wished: Boolean,
})

//Exporting
export default new mongoose.model("Fossil",FossilSchema);