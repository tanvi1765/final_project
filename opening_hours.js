const Joi = require("joi");

// create Opening hours
const createOpeninghours = {
    body: Joi.object().keys({
        open_time: Joi.string().trim().required(),
        close_time: Joi.string().trim().required(),
        day_of_week: Joi.string().trim().required(),
        Restaurant: Joi.string(),
    })
};

module.exports = {
    createOpeninghours
};