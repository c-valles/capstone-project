import mongoose from "mongoose";

const FossilSchema = new mongoose.Schema({
    name: String,
    image_url: String,
    fossil_group: String,
    sell: Number,
    donated: Boolean,
    wished: Boolean,
})

export default new mongoose.model("Fossil",FossilSchema);