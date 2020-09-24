module.exports = async (req, res, next) => {
    await req.app.locals.db.collection('projects').find().toArray((err, result) => {
        req.params.getData = result
        next()
    });
}