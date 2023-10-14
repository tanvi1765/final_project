const { State } = require("../model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createState = async (reqbody) => {
    return State.create(reqbody);
};

const stateList = (req, res) => {
    return State.find()
        .populate("Country");
};

const deleteRecode = async (stateId) => {
    return State.findByIdAndDelete(stateId);
};

const updateRecode = async (stateId, updateBody) => {
    return State.findByIdAndUpdate(stateId, { $set: updateBody });
};

const getStateById = async (stateId) => {
    return State.findById(stateId);
};
module.exports = {
    createState,
    stateList,
    deleteRecode,
    updateRecode,
    getStateById
};