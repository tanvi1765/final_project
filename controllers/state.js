const { stateService } = require("../services");

// create state
const createState = async (req, res) => {
    try {
        const reqBody = req.body;

        const state = await stateService.createState(reqBody);

        res.status(200).json({
            success: true,
            message: "State Create Successfully!",
            data: { state }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//get state list
const stateList = async (req, res) => {
    try {
        const getList = await stateService.stateList();
        res.status(200).json({
            success: true,
            message: "get State List successfully!",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update state information
const updateRecode = async (req, res) => {
    try {
        const stateId = req.params.stateId;

        const stateEx = await stateService.getStateById(stateId);
        if (!stateEx) {
            throw new Error("State Not Found");
        };

        await stateService.updateRecode(stateId, req.body);
        res.status(200).json({
            success: true,
            message: "State Details Update Successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete state information
const deleteRecode = async (req, res) => {
    try {
        const stateId = req.params.stateId;

        const stateEx = await stateService.getStateById(stateId);
        if (!stateEx) {
            throw new Error("State details not found")
        }
        await stateService.deleteRecode(stateId);
        res.status(200).json({
            success: true,
            message: "State details delete successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createState,
    stateList,
    updateRecode,
    deleteRecode
};