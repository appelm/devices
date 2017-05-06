var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var restaurant= req.query.restaurant
    res.render(`index`, {title: "Welcome to Matt\'s website!", restaurant: restaurant});
});

module.exports = router;
