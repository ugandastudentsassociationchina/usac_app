const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    return res.send('Hello World');
});


module.exports = router;