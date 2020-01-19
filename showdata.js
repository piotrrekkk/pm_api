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

        var values = {
            'PM 2.5': [],
            'PM 10': []
        };
        return new Promise.all(
            db.collection(collectionName)
                .find({ type: 'PM 2.5' })
                .toArray((err, item) => {
                    console.log('toArray2.5', item)
                    if (!err) {
                        values['PM 2.5'].push(item)
                    }
                    return item;
                }),

            db.collection(collectionName)
                .find({ type: 'PM 10' })
                .toArray((err, item) => {
                    console.log('toArray10', item)
                    if (!err) {
                        values['PM 10'].push(item)
                    }
                    return item;
                })

        )
    } catch (err) {
        console.log(err.stack);
    }
    client.close();
};

exports.showData = showData;