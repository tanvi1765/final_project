const Joi = require("joi");

// create payment validation
const createPayment = {
    body: Joi.object().keys({
        payment_method: Joi.string().trim().required(),
        amount: Joi.number().integer().required(),
        payment_date: Joi.date().required(),
        payment_status: Joi.date().required(),
        User: Joi.string().required(),
        Order: Joi.string().required(),
    })
};

module.exports = {
    createPayment
};