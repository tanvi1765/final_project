const { User } = require("../model");

/**
 * Create User
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createUser = async (reqbody) => {
    return await User.create(reqbody)
};
const findUserByEmail = async (email) => {
    return await User.findOne(email);
};

const findUserAndUpdate = async (_id, token) => {
    return await User.findUserAndUpdate(
        { _id },
        {
            $set: { token },
        },
        { new: true }
    );
};

const getAllUser = async (role) => {
    return await User.find(role);
};

module.exports = {
    createUser,
    findUserByEmail,
    findUserAndUpdate,
    getAllUser,
};