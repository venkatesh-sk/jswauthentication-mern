require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const userRouter = require('./routes/userRoute');
const dbUrl = "mongodb+srv://venkatesh:venkatesh@samples.gq0ae.mongodb.net/auth";
const connect = require('./modal/connection')
const customerRouter = require("./routes/customer")
const carRouter = require('./routes/carRoutes')
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(`${req.method}\t${req.originalUrl}\t${req.baseUrl} \t${new Date()}`);
    next();
})
app.use("/user", userRouter)
app.use("/customer", customerRouter)
app.use("/car", carRouter);


connect && app.listen(PORT, function(err) {
    if (!err) console.log(`server running successfully on port http://localhost:${PORT}`)
    else console.log("Error in runnnign server restart later")
})