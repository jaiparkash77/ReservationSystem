const app = require('./app');

const connectDatabase = require('./config/database');
// connecting to database
connectDatabase();

//create server
const server = app.listen(5000, ()=>{
    console.log(`Server is working on http://localhost:${5000}`);
})

// Unhandled Promise Rejection
process.on("unhandledRejection", (err)=>{
    console.log(`Error : ${err.message}`);
    console.log("Shutting down the server due to Unhandled Promise Rejection");

    server.close(()=>{
        process.exit(1);
    });
});