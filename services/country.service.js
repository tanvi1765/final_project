const { Country } = require("../model");

/**
 * Create country
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createCountry = async (reqBody) => {
    return Country.create(reqBody);
};
const countryList = async (req, res) => {
    return Country.find();
};

const getcountryById = async (countryId) => {
    return Country.findById(countryId);
};

const updateRecode = async (countryId, updateBody) => {
    return Country.findByIdAndUpdate(countryId, { $set: updateBody });
};

const deleteRecode = async (countryId) => {
    return Country.findByIdAndDelete(countryId);
};

module.exports = {
    createCountry,
    countryList,
    getcountryById,
    updateRecode,
    deleteRecode
};