const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.json('Welcome News APP server');
});

module.exports = router