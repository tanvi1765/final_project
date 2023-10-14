const Joi = require("joi");

// create Deliveries
const createDeliveries = {
    body: Joi.object().keys({
        status: Joi.string().trim().required(),
        delivery_date: Joi.date().required(),
        Order: Joi.string().required(),
        Deliverydrivers: Joi.string().required(),
    })
};

module.exports = {
    createDeliveries
};