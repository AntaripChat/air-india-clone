const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Types.ObjectId,
        ref : 'users'
    },
    flight_id : {
        type : mongoose.Types.ObjectId,
        ref : 'flights'
    },
    flightDate : {
        type : Date,
        required : true
    },
    total_seats : {
        type : Number,
        required : true
    },
    costPrice : {
        type : Number,
        reuired : true
    },
    status : {
        type : String,
        required : true,
        default : 'In Process',
        enum : ['Booked', 'Cancelled', 'In Process']
    }
}, { timestamps : true })

const TicketModel = mongoose.model('tickets', ticketSchema);

module.exports = { TicketModel }