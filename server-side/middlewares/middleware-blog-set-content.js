const MongoClient = require("mongodb");

module.exports = async (req, res, next) => {

    if (req.body.pass === '5@#1ˆ2*{&!c') {
        let data = req.body
        data._id = MongoClient.ObjectID;
        await req.app.locals.db.collection('blog').insertOne(data, function (err, res) {
            res.insertedId ? "" : console.log(res.insertedId + "Data islenemedi...");
            next();
        })
    } else {
        req.params.getData = 'Data Islenemedi.'
    }


}