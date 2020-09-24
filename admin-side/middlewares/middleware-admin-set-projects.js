const MongoClient = require("mongodb");

module.exports = async (req, res, next) => {
    if (req.body.pass === '5@#1ˆ2*{&!c') {
        let data = req.body
        data._id = MongoClient.ObjectID;
        await req.app.locals.db.collection('projects').insertOne(data, function (err, ress) {
            ress.insertedId ? "" : console.log(ress.insertedId + "Data islenemedi...");
            req.params.getData = ress.insertedId ? "Data Basarili bir sekilde islendi." : 'Data Islenmedi';
            next();
        })
    } else {
        req.params.getData = 'Data Islenemedi.'
    }
}