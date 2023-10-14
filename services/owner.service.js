const { Owner } = require("../model");

/**
 * Create owner
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createOwner = async (reqBody) => {
    return Owner.create(reqBody);
};
const ownerList = async (req, res) => {
    return Owner.find();
};

const getownerById = async (ownerId) => {
    return Owner.findById(ownerId);
};

const updateRecode = async (ownerId, updateBody) => {
    return Owner.findByIdAndUpdate(ownerId, { $set: updateBody });
};

const deleteRecode = async (ownerId) => {
    return Owner.findByIdAndDelete(ownerId);
};

module.exports = {
    createOwner,
    ownerList,
    getownerById,
    updateRecode,
    deleteRecode
};