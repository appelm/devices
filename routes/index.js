var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json({ type: 'application/json'});
var router = express.Router();

router.post('/', jsonParser, function(req, res) {
    var ip= req.body.ip;
    var hostname= req.body.hostname;
    console.log(req.body.ip);
    res.render(`index`, {title: "Devices", ip: ip, hostname: hostname});
});

module.exports = router;
