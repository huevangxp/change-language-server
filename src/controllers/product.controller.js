const Product = require('../models/product.model');

const {API_URL, API_KEY, IMAGE_URL} = require('../../constant/constant');

const axios = require('axios');

exports.createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        return res.status(201).json({ message: "Product created successfully", data: newProduct });
    } catch (error) {
        console.error("Error creating product:", error);  // Log the error for debugging
        return res.status(500).json({ message: "SERVER ERROR", error: error.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        if (!products || products.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }

        const lang = req.query.lang || "en";
        const filteredData = products.map(item => {
            console.log(item);
            return {
                id: item.id,
                title: item.title[lang],
        
                description:item.description[lang],
                 
                price: item.price,
            };
        });

        return res.status(200).json({ message: "Products fetched successfully", data: filteredData });

    } catch (error) {
        console.error("Error fetching products:", error);  // Log the error for debugging
        return res.status(500).json({ message: "SERVER ERROR", error: error.message });
    }
};


