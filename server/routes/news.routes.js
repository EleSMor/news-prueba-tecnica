const express = require('express');
const router = express.Router();
const { getNews, createNews, archiveNews, deleteNews } = require('../controllers/news.controller');

router.get('/', getNews);
router.post('/', createNews);
router.put('/:id/archive', archiveNews);
router.delete('/:id', deleteNews);

module.exports = router;