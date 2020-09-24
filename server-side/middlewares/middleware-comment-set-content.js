const MongoClient = require("mongodb");
module.exports = async (req, res, next) => {
    let data = await req.body;
    data._id = MongoClient.ObjectID()
    await req.app.locals.db.collection('blog').updateOne({ seoheader: req.body.parentNodeId }, { $addToSet: { "comment": req.body } })
    next()
}