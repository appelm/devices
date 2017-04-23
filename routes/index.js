var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send(`
        <h1>Welcome</h1>
        <p>Welcome to Matt's first Node.js application</p>
    `);
});

module.exports = router;