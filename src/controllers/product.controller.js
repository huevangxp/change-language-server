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
                title: {
                    code: item.title.code,
                    string: item.title[lang],
                },
                description: {
                    code: item.description.code,
                    string: item.description[lang],
                },
                price: item.price,
            };
        });

        return res.status(200).json({ message: "Products fetched successfully", data: filteredData });

    } catch (error) {
        console.error("Error fetching products:", error);  // Log the error for debugging
        return res.status(500).json({ message: "SERVER ERROR", error: error.message });
    }
};


exports.getTest = async (req, res) => {
    try {
        const api = 'https://acs-m.lazada.co.th/h5/mtop.relationrecommend.lazadarecommend.recommend/1.0/';
        const params = {
            appKey: '24677475',
            t: '1730711584646',
            sign: 'e51a29f7b9ecb52497adcaace805a48e',
            api: 'mtop.relationrecommend.LazadaRecommend.recommend',
            v: '1.0',
            type: 'originaljson',
            isSec: 1,
            AntiCreep: true,
            timeout: 20000,
            dataType: 'json',
            sessionOption: 'AutoLoginOnly',
            'x-i18n-language': 'th',
            'x-i18n-regionID': 'TH',
            data: JSON.stringify({
                appId: "32104",
                params: JSON.stringify({
                    appId: "32104",
                    isbackup: true,
                    newTileEnable: true,
                    language: "th",
                    region_id: "TH",
                    platform: "pc",
                    scene: "homepage",
                    appVersion: "7.48.0",
                    anonymous_id: "iDOvH4wAU3gCAWeJW/TDDb6T",
                    pageSize: 50,
                    userId: 0,
                    pageNo: 0
                })
            })
        };

        const response = await axios.get(api, { params });
        const data = response.data;

        return res.status(200).json({ message: "Data fetched successfully", data });
        
    } catch (error) {
        console.error("Error fetching Lazada data:", error);
        return res.status(500).json({ message: "SERVER ERROR", error: error.message });
    }
};