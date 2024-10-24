const News = require('../models/news.model');

const getNews = async (req, res, next) => {
    try {
        const news = await News.find().sort({ createdAt: -1 });

        return res.status(200).json(news);
    } catch (error) {
        return next(error);
    }
};

const createNews = async (req, res, next) => {
    try {
        const newNews = new News({
            title: req.body.title || "",
            description: req.body.description || "",
            content: req.body.content || "",
            author: req.body.author || "",
        })

        const news = await newNews.save();

        return res.status(200).json(news);
    } catch (error) {
        return next(error);
    }
}

const archiveNews = async (req, res, next) => {
    try {
        const { id } = req.params

        const newsUpdated = await News.findByIdAndUpdate(id, { archiveDate: Date.now() }, { new: true });

        return res.status(200).json(newsUpdated);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getNews,
    createNews,
    archiveNews,
}