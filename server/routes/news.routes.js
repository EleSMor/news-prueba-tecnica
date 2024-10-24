const express = require('express');
const router = express.Router();
const { getNews, createNews, archiveNews, updateNews } = require('../controllers/news.controller');

router.get('/', getNews);
router.post('/', createNews);
router.put('/:id/archive', archiveNews);

module.exports = router;