import mongoose from "mongoose";

const FossilSchema = new mongoose.Schema({
    name: String,
    image_url: String,
    fossil_group: String,
    sell: Number,
    donated: Boolean,
    wished: Boolean,
})

module.exports = mongoose.model('Fossil', FossilSchema);