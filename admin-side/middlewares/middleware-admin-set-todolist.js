const MongoClient = require("mongodb");

module.exports = async (req, res, next) => {
    if (req.body.pass === '5@#1ˆ2*{&!c') {
        if (req.body.rule.name === "isdone") {
            await req.app.locals.db.collection('admintodolist')
                .updateOne({ _id: MongoClient.ObjectId(req.body.parentNodeId) }, { $set: { isdone: req.body.rule.rule } }, { multi: false }, (err, ress) => {
                    req.params.getData = ress.modifiedCount;
                    next()
                })
        } else if (req.body.rule.name === "delete") {
            await req.app.locals.db.collection('admintodolist').deleteOne({ _id: MongoClient.ObjectId(req.body.parentNodeId) }, (err, ress) => {
                req.params.getData = ress.deletedCount;
                next()
            })
        } else if (req.body.rule.name === "add") {
            let data = req.body.data
            data._id = MongoClient.ObjectID;
            await req.app.locals.db.collection('admintodolist').insertOne(data, function (err, res) {
                res.insertedId ? req.params.getData = 'Islem Basarili' : console.log(res.insertedId + "Data islenemedi...");
                next();
            })
        }
    } else {
        req.params.getData = 'Data Islenemedi.'
    }
}