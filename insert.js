const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'airQuality';

async function insertToDb (collectionName, value) {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  try {

    await client.connect();
    const db = client.db(dbName);
    let r = await db
      .collection(collectionName)
      .insertOne(value);
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
};

exports.insertToDb = insertToDb;