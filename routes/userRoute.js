const express = require('express')
const router = express.Router();
const verifyToken = require("../middleware/verifyToken")
const User = require('../modal/userModal')
const jwt = require('jsonwebtoken')


router.post("/register", async(req, res) => {
    const { email, password } = req.body;

    const foundUser = await User.findOne({ email })
    if (foundUser) {
        res.status(401).send({
            message: "Error in saving user as the user already exists"
        })
    } else {
        res.status(201).send({
            status: "ok",
            message: "Success in savind the user detail",
            user: {
                email,
                accessToken: jwt.sign({ email }, "littlesecret", { expiresIn: "15s" })
            }
        })
    }
})
router.post("/login", async(req, res) => {
    const token = req.headers['authorization'].split(" ")[1]
    console.log(token)
    jwt.verify(token, "littlesecret", async(err, decode) => {
        if (!err) {
            if (decode) {
                req.authorization = true;
                console.log(decode);
                res.status(201).send("success in login")
            }
        } else {
            console.log(err)
            res.status(401).send("session expiered")
        }

    })
})
module.exports = router