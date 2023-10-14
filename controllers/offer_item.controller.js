const { offeritemService } = require("../services");

// create
const createOfferitem = async (req, res) => {
    try {
        const reqBody = req.body;

        const offeritem = await offeritemService.createOfferitem(reqBody);
        res.status(200).json({
            success: true,
            message: "Offeritem create successfully!",
            data: { offeritem },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get opening hours list
const offeritemList = async (req, res) => {
    try {
        const getList = await offeritemService.offeritemList();
        res.status(200).json({
            success: true,
            message: "Get offeritem list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const offeritemId = req.params.offeritemId;

        const offeritemEx = await offeritemService.getofferitemById(offeritemId);
        if (!offeritemEx) {
            throw new Error("Offeritem not found");
        }

        await offeritemService.updateRecode(offeritemId, req.body);
        res.status(200).json({
            success: true,
            message: "Offeritem detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const offeritemId = req.params.offeritemId;

        const offeritemEx = await offeritemService.getofferitemById(offeritemId);
        if (!offeritemEx) {
            throw new Error("Offeritem not found");
        };

        await offeritemService.deleteRecode(offeritemId, req.body);
        res.status(200).json({
            success: true,
            message: "Offeritem detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createOfferitem,
    offeritemList,
    updateRecode,
    deleteRecode
};