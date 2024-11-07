const New = require("../models/new.model");

exports.create = async (req, res) => {
  try {

    const { title, description } = req.body;

    console.log(title, description);

    if (!title || !description) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

   const newEntry  = await New.create({
      title,
      description
    });

    return res.status(201).json({ message: "New created successfully", data: newEntry });

      
    
  } catch (error) {
    return res.status(500).json({ message: "SERVER ERROR", error: error });
  }
}

exports.getNews = async (req, res) => {
  try {
    
    // const lang = req.query.lang || "la";

    const news = await New.findAll();
    if (!news || news.length === 0) {
      return res.status(404).json({ message: "No news found" });
    }

    // Get the desired language from query params (default to "la" if not provided)
    const lang = req.query.lang || "en";

    // Filter news data by the specified language
    const filteredData = news.map(item => {
      console.log(item);
      return {
        id: item.id,
        title:  item.title[lang],
 
        description:  item.description[lang]
 
        
      };
    });

    return res.status(200).json({ message: "News fetched successfully", data: filteredData });
  } catch (error) {
    return res.status(500).json({ message: "SERVER ERROR", error: error.message });
  }
};

exports.getOneNews = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await New.findByPk(id);
    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }


    // Get the desired language from query params (default to "la" if not provided)
    const lang = req.query.lang || "en";

    // Filter news data by the specified language
    const filteredData = {
      id: news.id,
      title: {
        code: news.code,
        string: news.title[lang],
      },
      description: {
        code: news.code,
        string: news.description[lang],
      },
    };

    return res.status(200).json({ message: "News fetched successfully", data: filteredData });
  } catch (error) {
    return res.status(500).json({ message: "SERVER ERROR", error: error.message });
  }
};