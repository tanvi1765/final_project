const { restauranttypeService } = require("../services");

// create restauranttype
const createRestauranttype = async (req, res) => {
    try {
        const reqBody = req.Body;

        const restauranttype = await restauranttypeService.createRestauranttype(reqBody);
        res.status(200).json({
            success: true,
            message: "Restauranttype Create Successfully!",
            data: { restauranttype }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// Restaurant type list
const restauranttypeList = async (req, res) => {
    try {
        const getList = await restauranttypeService.restauranttypeList();
        res.status(200).json({
            success: true,
            message: "Restauranttype List Create Successfully",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const restauranttypeId = res.params.restauranttypeId;
        const restaurantEx = await restauranttypeService.getrestauranttypeById(restauranttypeId);
        if (!restaurantEx) {
            throw new Error("Restaurant Type not found");
        }
        await restauranttypeService.updateRecode(restauranttypeId, req.Body);
        res.status(200).json({
            success: true,
            message: "Restaurant Type Update Successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const restauranttypeId = req.params.restauranttypeId;
        const restaurantEx = await restauranttypeService.getrestauranttypeById(restauranttypeId);
        if (!restaurantEx) {
            throw new Error("Restaurant Type is not found");
        }

        await restauranttypeService.deleteRecode(restauranttypeId);
        res.status(200).json({
            success: true,
            message: "Restaurant Type Delete Successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createRestauranttype,
    restauranttypeList,
    updateRecode,
    deleteRecode
};