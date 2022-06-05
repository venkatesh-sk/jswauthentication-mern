const getAllUser = (req, res, next) => {
    console.log(req.header.origin)
    res.status(200).json({
        message: "success in retireving users details"
    })
}
module.exports = getAllUser