module.exports = async (req, res, next) => {
    await req.app.locals.db.collection('errorcatch').find({}).toArray((err, result) => {
        req.params.getData = result
        next()
    });
}