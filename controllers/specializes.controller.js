const { specializesService } = require("../services");

// create specializes
const createspecializes = async (req, res) => {
    try {
        const reqBody = req.body;

        const specializes = await specializesService.createspecializes(reqBody);
        res.status(200).json({
            success: true,
            message: "specializes create successfully !",
            data: { specializes }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//specializes  list
const specializesList = async (req, res) => {
    try {
        const getlist = await specializesService.specializesList();
        res.status(200).json({
            success: true,
            message: "get specializes list successfully!",
            data: { getlist }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const specializesId = res.params.specializesId;
        const specializesEx = await specializesService.getspecializesById(specializesId);
        if (!specializesEx) {
            throw new Error("specializes not found")
        }
        await specializesService.updateRecode(specializesId, req.body);
        res.status(200).json({
            success: true,
            message: "specializes details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const specializesId = res.params.specializesId;
        const specializesEx = await specializesService.getspecializesById(specializesId);
        if (!specializesEx) {
            throw new Error("specializes detiles not found")
        }
        await specializesService.deleteRecode(specializesId);
        res.status(200).json({
            success: false,
            message: "specializes detiles delete successfully"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};
module.exports = {
    createspecializes,
    specializesList,
    updateRecode,
    deleteRecode
};