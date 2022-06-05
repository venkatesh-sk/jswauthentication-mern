const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
    }
})

const user = mongoose.model("User-data", userSchema)

module.exports = user