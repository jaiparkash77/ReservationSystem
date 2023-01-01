const Ticket = require('../model/ticketModel');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');


// Book Ticket - http://localhost:5000/bookTicket/1
exports.createTicket = catchAsyncErrors(async (req,res,next)=>{
    
    const totalTicketsForBooking = req.params.id;
    let totalSeats = 10;
    const ticket = await Ticket.countDocuments(); 
    var msg = "New Ticket Created";
    var count = parseInt(ticket);
    

    if(count<=totalSeats){

        if(parseInt(totalTicketsForBooking) + parseInt(ticket) > totalSeats){
            msg = totalTicketsForBooking + " seats are not available";
        }else{
            for(let i=1;i<=totalTicketsForBooking;i++){                
                const data = {
                    "ticketNumber": parseInt(ticket) +1
                }
                await Ticket.create(data); 
            }             
            
        }        
        
    }else{
        msg = "Coach is Full";
    }

    const ticketbooked = await Ticket.countDocuments(); 
    const dt = await Ticket.find({}).sort({_id:-1}).limit(1);
    var result = dt.map((num)=>num.ticketNumber);

    res.status(201).json({
        // success:true,
        msg,
        TotalSeats:totalSeats,
        Available:totalSeats-parseInt(ticketbooked), 
        last: result[0],
    })
});

// Get all Tickets
exports.getAllTickets = catchAsyncErrors(async (req,res)=>{

    // const allBookedTickets = await Ticket.find();
    const allBookedTickets = await Ticket.countDocuments(); 
    let totalSeats = 10;
    res.status(200).json({
        TotalSeats:totalSeats,
        allBookedTickets,
        AvailableSeats: totalSeats-parseInt(allBookedTickets)        
    })
});