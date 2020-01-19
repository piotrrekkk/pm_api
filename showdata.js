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

        return Promise.all([
            db.collection(collectionName)
                .find({ type: 'PM 2.5' })
                .toArray((err, item) => {
                    console.log('pm25', item)
                    return item;
                })
                .then(data => data),
            db.collection(collectionName)
                .find({ type: 'PM 10' })
                .toArray((err, item) => {
                    console.log('pm10', item)
                    return item;
                })
        ])
    } catch (err) {
        console.log(err.stack);
    }
    client.close();
};

exports.showData = showData;