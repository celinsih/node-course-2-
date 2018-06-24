const {MongoClient, ObjectID} = require('mongodb');

// const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Users");
  // find documments
  dbo.collection("Users").find({age: "12"}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
