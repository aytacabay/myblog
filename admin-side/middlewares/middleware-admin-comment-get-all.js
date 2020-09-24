module.exports = async (req, res, next) => {
    await req.app.locals.db.collection('blog')
        .aggregate(
            [{ $unwind: "$comment" }, { $match: { "comment.didYouRead": false, "comment.ignore": false } }, { $project: { _id: 1, "comment": 1 } },]).toArray((err, result) => {
                console.log('DEDE')
                req.params.getData = result
                next()
            });
}