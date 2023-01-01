const mongoose = require('mongoose');

const connectDatabase = () =>{
    mongoose.connect("mongodb://localhost:27017/reservation").then((data)=>{
        console.log(`MongoDb connected with server: ${data.connection.host}`);
    });
}

module.exports = connectDatabase