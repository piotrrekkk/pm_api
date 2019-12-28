const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'airQuality';

(async function() {
  const client = new MongoClient(url, {
  useNewUrlParser: true,
   useUnifiedTopology: true 
  });

  try {
  
    await client.connect();

    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // Insert a single document
    let r = await db.collection('kobylany').insertOne({a:1});
    assert.equal(1, r.insertedCount);

  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();
