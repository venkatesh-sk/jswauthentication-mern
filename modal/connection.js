const mongoose = require('mongoose')

const connect = mongoose.connect(`mongodb+srv://venkatesh:venkatesh@samples.gq0ae.mongodb.net/test`, (err) => {
    if (!err) return true
    return false
});

module.exports = connect