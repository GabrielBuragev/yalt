const { MongoClient } = require('mongodb');

/**
 * Connect Mongo Driver to MongoDB.
 */
let db;

MongoClient.connect('mongodb://localhost/track', (err, database) => {
  if (err) {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
  }
  db = database;
});

module.exports = MongoClient;