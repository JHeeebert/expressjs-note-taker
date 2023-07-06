// require path and express
const path = require('path');
const router = require('express').Router();
// sends notees to the notes.html file
router.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public/routes/notes.html'));
});
// sends to the home page if posting issues occur
router.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public/routes/index.html'));
});
//export router
module.exports = router;