const { Openinghours } = require("../model");

/**
 * Create openinghours
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createOpeninghours = async (reqBody) => {
    return Openinghours.create(reqBody);
};
const openinghoursList = async (req, res) => {
    return Openinghours.find()
    .populate("Restaurant");
};

const getopeninghoursById = async (openinghoursId) => {
    return Openinghours.findById(openinghoursId);
};

const updateRecode = async (openinghoursId, updateBody) => {
    return Openinghours.findByIdAndUpdate(openinghoursId, { $set: updateBody });
};

const deleteRecode = async (openinghoursId) => {
    return Openinghours.findByIdAndDelete(openinghoursId);
};

module.exports = {
    createOpeninghours,
    openinghoursList,
    getopeninghoursById,
    updateRecode,
    deleteRecode
};