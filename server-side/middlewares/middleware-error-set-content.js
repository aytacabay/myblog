module.exports = async (req, res, next) => {
  let dataPayload;

  if (req.body) {
    dataPayload = {
      postMethod: req.method,
      ip: req.ip,
      currentTime: new Date().getTime(),
      url: (req.body.data.url.href) ? req.body.data.url.href : 'null',
      browserData: req.body.data
    }
  } else {
    dataPayload = {
      postMethod: req.method,
      ip: req.ip,
      currentTime: new Date().getTime(),
      url: req.params[0],
    };
  }

  if (req.method !== 'HEAD' || req.method !== 'OPTIONS') {
    await req.app.locals.db.collection("errorcatch").insertOne(dataPayload, function (err, res) {
      res.insertedId ? "" : console.log(res.insertedId + "Data islenemedi...");
      next();
    });
  } else {
    return null
  }

};
