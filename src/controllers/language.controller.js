const Language = require("../models/languages.model");

 exports.createLanguage = async (req, res) => {
     try {
        const { code, en, la } = req.body;
        if(!code || !en || !la) {
            return res.status(400).json({ message: "PLEASE PROVIDE ALL REQUIRED FIELDS" });
        }   

        const newLanguage = await Language.create({
            code,
            en,
            la
        });

        return res.status(201).json({ message: "Language created successfully", data: newLanguage });
     } catch (error) {
        return res.status(500).json({ message: "SERVER ERROR", error: error });
     }
 }

 exports.getLanguages = async (req, res) => {
     try {
        const languages = await Language.findAll();

        const lang = req.query.lang || "en";

        const filteredData = languages.map(item => ({
            // id: item.id,
            code: item.code,
            string: item[lang] || null,
        }));

        return res.status(200).json({ message: "Languages fetched successfully", data: filteredData });

     } catch (error) {
        return res.status(500).json({ message: "SERVER ERROR", error: error });
     }
 }