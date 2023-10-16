const Joi = require("joi");

// create Country
const createCountry = {
    body: Joi.object().keys({
        country_name: Joi.string().default("india").allow(""),
    })
};

module.exports = {
    createCountry
};