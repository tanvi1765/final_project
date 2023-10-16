const { userService } = require("../services");

// create user
const createuser = async (req, res) => {
    try {
        const reqBody = req.body;

        const user = await userService.createuser(reqBody);

        res.status(200).json({
            success: true,
            message: "user Create Successfully!",
            data: { user }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//get user list
const userList = async (req, res) => {
    try {
        const getList = await userService.userList();
        res.status(200).json({
            success: true,
            message: "get user List successfully!",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update user information
const updateRecode = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEx = await userService.getuserById(userId);
        if (!userEx) {
            throw new Error("user Not Found");
        };

        await userService.updateRecode(userId, req.body);
        res.status(200).json({
            success: true,
            message: "user Details Update Successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete user information
const deleteRecode = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEx = await userService.getuserById(userId);
        if (!userEx) {
            throw new Error("user details not found")
        }
        await userService.deleteRecode(userId);
        res.status(200).json({
            success: true,
            message: "user details delete successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createuser,
    userList,
    updateRecode,
    deleteRecode
};