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

        return new Promise((resolve, reject) => db.collection(collectionName)
            .find({
                $and: [
                    { type: 'PM 2.5' },
                    { type: 'PM 10' }
                ]
            })
            .toArray((err, item) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(item);
            }));
    } catch (err) {
        console.log(err.stack);
    }
    client.close();
};

exports.showData = showData;