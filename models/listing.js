const mongoose = require('mongoose')

const listingSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String,

}, {timestamps: true})

module.exports = mongoose.model('Listings',listingSchema)
