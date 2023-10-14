const Joi = require("joi");

// create order validation
const createOrder = {
    body: Joi.object().keys({
        order_data: Joi.date().required(),
        total_price: Joi.string().trim().required(),
        status: Joi.string().trim().required(),
        User: Joi.string(),
    })
};

module.exports = {
    createOrder
};