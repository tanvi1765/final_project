const Joi = require("joi");

// create deliveryaddresses
const createDeliveryAddresses = {
    body: Joi.object().keys({
        street_address: Joi.string().trim().required(),
        User: Joi.string().trim().required(),
        City: Joi.string().trim().required(),
        State: Joi.string().trim().required(),
    })
};

module.exports = {
    createDeliveryAddresses
};