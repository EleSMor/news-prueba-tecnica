const express = require('express');
const router = express.Router();
const { getNews, getArchivedNews, createNews, archiveNews, deleteNews } = require('../controllers/news.controller');

router.get('/', getNews);
router.get('/archived', getArchivedNews);
router.post('/', createNews);
router.put('/:id/archive', archiveNews);
router.delete('/:id', deleteNews);

module.exports = router;