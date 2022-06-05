const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Car = require("../modal/carModal")




router.get("/cardetails", async(req, res) => {
        const cars = await Car.find().populate('customer-data')
        if (cars) res.status(201).json({ cars })
        else res.status(401).json({ status: "failed" })

    })
    .post("/addcar", async(req, res) => {
        console.log(req.body)
        const { number, modal, contact } = req.body;
        const result = await Car.create({
            number,
            modal
        })
        if (result) {
            res.status(200).send({ status: "ok" })
        } else {
            console.log("Error in updating data")
        }
    })
module.exports = router