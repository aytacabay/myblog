module.exports = async (req, res, next) => {
    await req.app.locals.db.collection('contact').find({ didYouRead: false }).toArray((err, result) => {
        req.params.getData = result
        next()
    });
}