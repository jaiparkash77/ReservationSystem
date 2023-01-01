const express = require("express");

const {createTicket, getAllTickets} = require('../controller/reservationController');

const router = express.Router();

//routes
router.route('/allTickets').get(getAllTickets);

router.route("/bookTicket/:id").put(createTicket);

module.exports = router
