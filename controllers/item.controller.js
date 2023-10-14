const { itemService } = require("../services");

// create
const createItem = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const item = await itemService.createItem(reqBody);
        res.status(200).json({
            success: true,
            message: "Item create successfully",
            data: { item },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get item list
const itemList = async (req, res) => {
    try {
        const getList = await itemService.itemList();
        res.status(200).json({
            success: true,
            message: "Get item list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
// update
const updateRecode = async (req, res) => {
    try {
        const itemId = req.params.itemId;
        const itemEx = await itemService.getitemById(itemId);
        if (!itemEx) {
            throw new Error("Item not found");
        }

        await itemService.updateRecode(itemId, req.body);
        res.status(200).json({
            success: true,
            message: "Item detiles update successfully!"
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const itemId = req.params.itemId;
        const itemEx = await itemService.getitemById(itemId);
        if (!itemEx) {
            throw new Error("Item not found");
        };

        await itemService.deleteRecode(itemId, req.body);
        res.status(200).json({
            success: true,
            message: "Item detiles delete successfully !"
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createItem,
    itemList,
    updateRecode,
    deleteRecode
}