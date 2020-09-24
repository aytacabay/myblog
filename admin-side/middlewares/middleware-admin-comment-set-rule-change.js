const MongoClient = require("mongodb");

module.exports = async (req, res, next) => {
    if (req.body.pass === '5@#1ˆ2*{&!c') {
        if (req.body.rule.name === 'ignore') {
            await req.app.locals.db.collection('blog').updateOne({ _id: MongoClient.ObjectId(req.body.parentNodeId), "comment._id": MongoClient.ObjectId(req.body.childNodeId) }, { $set: { "comment.$.ignore": req.body.rule.rule, "comment.$.didYouRead": req.body.rule.rule } }, { multi: false })
        } else if (req.body.rule.name === 'readed') {
            await req.app.locals.db.collection('blog').updateOne({ _id: MongoClient.ObjectId(req.body.parentNodeId), "comment._id": MongoClient.ObjectId(req.body.childNodeId) }, { $set: { "comment.$.didYouRead": req.body.rule.rule } }, { multi: false })
        }
        next()
    } else {
        req.params.getData = 'Data Islenemedi.'
    }
}


// db.blog.update({_id:ObjectId("5eaf35b12568960676034d7e"),"comment._id":ObjectId("5eb0d1cc85cd991ca4133b86")},{$set:{"comment.$.ignore":true}},{multi:false})