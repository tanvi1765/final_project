const { specilalizes } = require("../model");

/**
 * Create specializes
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createspecilalizes = async (reqBody) => {
    return specilalizes.create(reqBody);
};

const specilalizesList = async (req, res) => {
    return specilalizes.find();
};

const getspecilalizesById = async (ownerId) => {
    return specilalizes.findById(ownerId);
};

const updateRecode = async (specilalizesId, updateBody) => {
    return specilalizes.findByIdAndUpdate(specilalizesId, { $set: updateBody });
};

const deleteRecode = async (specilalizesId) => {
    return specilalizes.findByIdAndDelete(specilalizesId);
};

module.exports = {
    createspecilalizes,
    specilalizesList,
    getspecilalizesById,
    updateRecode,
    deleteRecode
};
