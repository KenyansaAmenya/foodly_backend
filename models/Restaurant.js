const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    title: { type: String, required: true },
    time: { type: String, required: true },
    imageUrl: { type: String, required: true },
    foods: { type: Array },
    pickup: { type: Boolean, required: false, default: true },
    delivery: { type: Boolean, required: false, default: true },
    owner: { type: String, required: true },
    isAvaillable: {type: Boolean, default: true},
    code: {type: String, required: true},
    logoUrl: {
        type: String,
        required: true,
        default: 'https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp'
    },
    rating: {type: Number, min: 1, max: 5},
    ratingCount: {type: String},
    coords: {
         id: {type: String, required: true},
         latitude: {type: Number, required: true},
         longitude: { type: Number, required: true },
        latitudeDelta: { type: Number, required: true, default: 0.0122 },
        longitudeDelta: { type: Number, required: true, default: 0.0221 },
        address: {type: String, required: true},
        title: {type: String, required: true}
    }



}, { timestamps: true })

module.exports = mongoose.model('Restaurant', restaurantSchema)