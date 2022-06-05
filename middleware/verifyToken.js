const jwt = require('jsonwebtoken')


const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log(authHeader)
    const bearerToken = authHeader.split(" ");
    const token = bearerToken[1];
    console.log(token)
    jwt.verify({ token }, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
        if (!err) console.log(decode)
        else(console.log(err))
    })

}
module.exports = verifyToken