const { openinghoursService } = require("../services");

// create
const createOpeninghours = async (req, res) => {
    try {
        const reqBody = req.body;

        const openinghours = await openinghoursService.createOpeninghours(reqBody);
        res.status(200).json({
            success: true,
            message: "Openinghours create successfully",
            data: { openinghours },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get opening hours list
const openinghoursList = async (req, res) => {
    try {
        const getList = await openinghoursService.openinghoursList();
        res.status(200).json({
            success: true,
            message: "Get Openinghours list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const openinghoursId = req.params.openinghoursId;

        const openinghoursEx = await openinghoursService.getopeninghoursById(openinghoursId);
        if (!openinghoursEx) {
            throw new Error("Openinghours not found");
        }

        await openinghoursService.updateRecode(openinghoursId, req.body);
        res.status(200).json({
            success: true,
            message: "Openinghours detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const openinghoursId = req.params.openinghoursId;

        const openinghoursEx = await openinghoursService.getopeninghoursById(openinghoursId);
        if (!openinghoursEx) {
            throw new Error("Openinghours not found");
        };

        await openinghoursService.deleteRecode(openinghoursId, req.body);
        res.status(200).json({
            success: true,
            message: "Openinghours detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createOpeninghours,
    openinghoursList,
    updateRecode,
    deleteRecode
};