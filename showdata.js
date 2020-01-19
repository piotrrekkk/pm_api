const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'airQuality';

async function showData(collectionName) {
    const client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {
        await client.connect();
        const db = client.db(dbName);

            let valuePM25 = await db.collection(collectionName)
                .find({ type: 'PM 2.5' })
                .toArray((err, item) => {
                    console.log('pm25', item, arguments)
                    // return item;
                    resolve(item);
                });

            let valuePM10 = await db.collection(collectionName)
                .find({ type: 'PM 10' })
                .toArray((err, item) => {
                    console.log('pm10', item, arguments)
                    resolve(item);
                });

            return Promise.all([valuePM10, valuePM25]);

    } catch (err) {
        console.log(err.stack);
    }
    client.close();
};

exports.showData = showData;