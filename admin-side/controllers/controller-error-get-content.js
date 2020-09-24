module.exports = (req, res) => {
    console.log('CLIENTCHECK - GET - REQUEST')
    res.json({
        getData: req.params
    })
}