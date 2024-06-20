import mongoose from "mongoose";

const ArtSchema = new mongoose.Schema({
    name: String,
    image_url: String,
    art_name: String,
    art_type: String,
    author: String,
    year: String,
    buy: Number,
    sell: Number,
    availability: String,
    donated: Boolean,
    wished: Boolean,
})

export default new mongoose.model("Art",ArtSchema);