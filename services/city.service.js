const { City } = require("../model");

/**
 * Create city
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createCity = async (reqBody) => {
    return City.create(reqBody);
};
const cityList = async (req, res) => {
    return City.find()
    .populate("State")
    .populate("User");
};

const getcityById = async (cityId) => {
    return City.findById(cityId);
};

const updateRecode = async (cityId, updateBody) => {
    return City.findByIdAndUpdate(cityId, { $set: updateBody });
};

const deleteRecode = async (cityId) => {
    return City.findByIdAndDelete(cityId);
};

module.exports = {
    createCity,
    cityList,
    getcityById,
    updateRecode,
    deleteRecode
};