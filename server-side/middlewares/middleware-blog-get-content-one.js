module.exports = async (req, res, next) => {

    await req.app.locals.db.collection("blog").find({ seoheader: req.params.seoheader }).project({}).limit(1).toArray((err, ress) => {

        req.params.getData = ress[0];

        if (req.params.getData === undefined) {
            next()
        } else {
            if (req.params.getData.comment) {
                for (let index = 0; index < req.params.getData.comment.length; index++) {
                    if (req.params.getData.comment[index].ignore === true) {
                        delete req.params.getData.comment[index]
                    }
                }
            }
            req.params.getData;
            next();
        }
    })

};
