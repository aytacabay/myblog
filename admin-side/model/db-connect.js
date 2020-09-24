/* -------------------------------------------------------------------------- */
/*                                     ENV                                    */
/* -------------------------------------------------------------------------- */

const username = "aytacabay";
const userpass = "94-*$-KKTC-25";
const port = 55055;

/* -------------------------------------------------------------------------- */
/*                                  Connect                                   */
/* -------------------------------------------------------------------------- */

const MongoClient = require("mongodb").MongoClient;

const url = `mongodb://${username}:${userpass}@192.168.254.2:${port}/`;
const dbName = "myblog";

async function mongoSetting(app) {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  console.log("Connected");

  const db = client.db(dbName);
  app.locals.db = db;
}

module.exports = mongoSetting;
