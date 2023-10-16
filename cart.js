const Joi = require("joi");

// create admin
const createCart = {
    body: Joi.object().keys({
        item_name: Joi.string().trim().required(),
        total_items: Joi.number().integer(),
        total_price: Joi.number().integer(),
        coupon_code: Joi.number().integer(),
        User: Joi.string(),
    })
};

module.exports = {
    createCart
};