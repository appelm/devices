var express = require('express');
var router = express.Router();

router.get('/about', function(req, res){
    res.send(`
        <h1>About Matt</h1>
        <p>Matt is a Security Consultant and chocolate eater extrordinairre!</p>
    `);
});

router.get('/about/:var', function(req, res){
    var test = req.params.var
    res.send(`
        <h1>About Matt</h1>
        <p>${test}</p>
        <p>Matt is a Security Consultant and chocolate eater extrordinairre!</p>
    `);
});

module.exports = router;
