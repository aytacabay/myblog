module.exports = async (req, res, next) => {
    await req.app.locals.db.collection('admintodolist').find({ isdone: false }).toArray((err, result) => {
        req.params.getData = result
        next()
    });
}