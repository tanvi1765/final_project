const { Offeritem } = require("../model");

/**
 * Create offeritem
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createOfferitem = async (reqBody) => {
    return Offeritem.create(reqBody);
};
const offeritemList = async (req, res) => {
    return Offeritem.find()
    .populate("Offer")
    .populate("Item");
};

const getofferitemById = async (offeritemId) => {
    return Offeritem.findById(offeritemId);
};

const updateRecode = async (offeritemId, updateBody) => {
    return Offeritem.findByIdAndUpdate(offeritemId, { $set: updateBody });
};

const deleteRecode = async (offeritemId) => {
    return Offeritem.findByIdAndDelete(offeritemId);
};

module.exports = {
    createOfferitem,
    offeritemList,
    getofferitemById,
    updateRecode,
    deleteRecode
};