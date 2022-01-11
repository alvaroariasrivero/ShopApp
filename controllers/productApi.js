const Product = require('../models/product');

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

const getAllProducts = async(req, res) => {
    let data;
    try {
        data = await Product.find({}, '-_id').populate('provider', '-_id');
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({"error":error});
    }
}

const getProductsByName = async(req, res) => {
    let data;
    try {
        const regex = new RegExp(escapeRegex(req.params.name), 'gi')
        data = await Product.find({$or:[{'name': regex}, {'trademark': regex}]}, '-_id').populate('provider', '-_id');
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({"error":error});
    }
}

const getProductById = async (req, res) => {
    let data;
    try {
        data = await Product.find({'id': req.params.id}, '-_id').populate('provider', '-_id');
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({"error":error});
    }
}

const getProductsByProvider = async(req, res) => {
    let data;
    try {
        const regex = new RegExp(escapeRegex(req.params.provider), 'gi')
        data = await Product.find({'provider': regex}, '-_id').populate('provider', '-_id');
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({"error":error});
    }
}

const getProducts = {
    getAllProducts,
    getProductsByName,
    getProductsByProvider,
    getProductById
}

module.exports = getProducts;