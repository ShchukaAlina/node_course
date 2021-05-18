const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const URL = "mongodb+srv://ashchuka:ashchuka@main.sbnht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const mongoConnect = callback => {
    MongoClient.connect(URL, { useUnifiedTopology: true } )
        .then(res => {
            callback(res);
            console.log("Connected");
        })
        .catch(err => console.log("Error: " + err))
}
module.exports = mongoConnect;