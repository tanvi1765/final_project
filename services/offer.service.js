const { Offer } = require("../model");

/**
 * Create offer
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createOffer = async (reqBody) => {
    return Offer.create(reqBody);
};
const offerList = async (req, res) => {
    return Offer.find()
    .populate("Restaurant");
};

const getofferById = async (offerId) => {
    return Offer.findById(offerId);
};

const updateRecode = async (offerId, updateBody) => {
    return Offer.findByIdAndUpdate(offerId, { $set: updateBody });
};

const deleteRecode = async (offerId) => {
    return Offer.findByIdAndDelete(offerId);
};

module.exports = {
    createOffer,
    offerList,
    getofferById,
    updateRecode,
    deleteRecode
};