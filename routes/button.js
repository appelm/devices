var express = require('express');
var router = express.Router();

router.get('/button', function(req, res) {
    var restaurant= req.query.restaurant
    res.render(`button`, {title: "Welcome to Matt\'s website!", restaurant: restaurant});
});

module.exports = router;
