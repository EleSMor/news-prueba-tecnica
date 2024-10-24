const News = require("../models/news.model");

const getNews = async (req, res, next) => {
  try {
    const news = await News.find({ archiveDate: null }).sort({ createdAt: -1 });

    return res.status(200).json(news);
  } catch (error) {
    return next(error);
  }
};

const getArchivedNews = async (req, res, next) => {
  try {
    const news = await News.find({ archiveDate: { $ne: null } }).sort({
      archivedDate: -1,
    });

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
    });

    const news = await newNews.save();

    return res.status(200).json(news);
  } catch (error) {
    return next(error);
  }
};

const archiveNews = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newsUpdated = await News.findByIdAndUpdate(
      id,
      { archiveDate: Date.now() },
      { new: true }
    );

    return res.status(200).json(newsUpdated);
  } catch (error) {
    return next(error);
  }
};

const deleteNews = async (req, res, next) => {
  try {
    const { id } = req.params;

    const isArchivedNews = await News.findOne({
      _id: { $eq: id },
      archiveDate: { $ne: null },
    });

    if (!isArchivedNews) {
      return res
        .status(400)
        .json(`It is not possible to delete new with id ${id}.`);
    }

    await News.findByIdAndDelete(id);

    return res
      .status(200)
      .json(`New with id ${id} has been successfully deleted`);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getNews,
  getArchivedNews,
  createNews,
  archiveNews,
  deleteNews,
};
