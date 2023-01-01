const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    ticketNumber:{
        type:Number,
        required:[true,"Please Select Seats"]
    },
    // booketAt:{
    //     type: Date,
    //     default: Date.now
    // }
})

module.exports = mongoose.model("Ticket",TicketSchema);