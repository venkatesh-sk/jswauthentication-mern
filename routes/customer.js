const mongoose = require('mongoose');
const express = require('express');


const Customer = require('../modal/customer');


const router = express.Router();

router.get("/allcustomer", async(req, res) => {

    const customers = await Customer.find().populate("car")
    if (!customers) {
        res.status(401).send({
            status: "failed to fetch"
        })
    } else {
        res.status(200).send({
            customers
        })
    }
})

module.exports = router