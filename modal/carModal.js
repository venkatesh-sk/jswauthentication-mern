const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const carSchema = mongoose.Schema({
    number: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer-data"
    }

})

const carmodel = mongoose.model("car-data", carSchema)
module.exports = carmodel