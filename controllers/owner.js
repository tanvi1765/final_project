const { ownerService } = require("../services");

// create
const createOwner = async (req, res) => {
    try {
        const reqBody = req.body;

        const owner = await ownerService.createOwner(reqBody);
        res.status(200).json({
            success: true,
            message: "owner create successfully!",
            data: { owner },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get opening hours list
const ownerList = async (req, res) => {
    try {
        const getList = await ownerService.ownerList();
        res.status(200).json({
            success: true,
            message: "Get owner list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const ownerId = req.params.ownerId;

        const ownerEx = await ownerService.getownerById(ownerId);
        if (!ownerEx) {
            throw new Error("owner not found");
        }

        await ownerService.updateRecode(ownerId, req.body);
        res.status(200).json({
            success: true,
            message: "owner detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const ownerId = req.params.ownerId;

        const ownerEx = await ownerService.getownerById(ownerId);
        if (!ownerEx) {
            throw new Error("owner not found");
        };

        await ownerService.deleteRecode(ownerId, req.body);
        res.status(200).json({
            success: true,
            message: "owner detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createOwner,
    ownerList,
    updateRecode,
    deleteRecode
};