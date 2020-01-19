const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'airQuality';

const insert = (async function (collectionName) {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  try {

    await client.connect();
    const db = client.db(dbName);
    let r = await db
      .collection(collectionName)
      .insertOne({
        a: 1
      });
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
})(collectionName);

exports.insertToDb = insert;