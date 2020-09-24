module.exports = async (req, res, next) => {
    await req.app.locals.db.collection('blog').find({}).project({ date: 1, header: 1, info: 1, seoheader: 1, tag: 1, time: 1, readtime: 1 }).toArray((err, result) => {
        req.params.getData = result
        next()
    });
}





















  // ! Warning Importent : async/await yapis bir web apisi oldugu icin js engine code compare ederken web api lerini compale esnasinda calistirmaz. Onlari Task bolumu diye adlandirdigi yere cekerek orada callstack icerisindeki tum islemler bittikten sonra engine doner task icersinde gorev varmi bakar ve var ise oradaki gorevi sirasi ile calistirir. Birden fazla gorevler olabilir. Sonra calisan ve islemi biten task i engine callstack e geri gonderir ve oradada compare islemi calistirilarak ekrana basilir. 