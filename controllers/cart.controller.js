const { cartService } = require("../services");

// create
const createCart = async (req, res) => {
    try {
        const reqBody = req.body;

        const cart = await cartService.createCart(reqBody);
        res.status(200).json({
            success: true,
            message: "Cart create successfully!",
            data: { cart },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get opening hours list
const cartList = async (req, res) => {
    try {
        const getList = await cartService.cartList();
        res.status(200).json({
            success: true,
            message: "Get cart list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const cartId = req.params.cartId;

        const cartEx = await cartService.getcartById(cartId);
        if (!cartEx) {
            throw new Error("Cart not found");
        }

        await cartService.updateRecode(cartId, req.body);
        res.status(200).json({
            success: true,
            message: "Cart detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const cartId = req.params.cartId;

        const cartEx = await cartService.getcartById(cartId);
        if (!cartEx) {
            throw new Error("Cart not found");
        };

        await cartService.deleteRecode(cartId, req.body);
        res.status(200).json({
            success: true,
            message: "Cart detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createCart,
    cartList,
    updateRecode,
    deleteRecode
};