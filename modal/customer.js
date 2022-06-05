const mongoose = require('mongoose');

const customer = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "car-data"

    }
})


const modal = mongoose.model("Customer-data", customer)
module.exports = modal