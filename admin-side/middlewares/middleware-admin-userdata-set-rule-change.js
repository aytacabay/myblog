const MongoClient = require("mongodb");

module.exports = async (req, res, next) => {
    if (req.body.passKey === '5@#1ˆ2*{&!c') {
        await req.app.locals.db.collection('adminuser').updateOne({ name: req.body.name, code: req.body.code }, { $set: { pass: req.body.pass } }, { multi: false }, (err, ress) => {
            req.params.getData = ress.modifiedCount;
            next()
        })
    } else {
        req.params.getData = 'Data Islenemedi.'
    }

}


// db.blog.update({_id:ObjectId("5eaf35b12568960676034d7e"),"comment._id":ObjectId("5eb0d1cc85cd991ca4133b86")},{$set:{"comment.$.ignore":true}},{multi:false})