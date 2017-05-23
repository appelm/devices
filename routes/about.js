var express = require('express');
var router = express.Router();
//const pug = require('pug');
//const compiledFunction = pug.compileFile('./views/about.pug');

router.get('/about', function(req, res){
    var test=req.query.test
    res.render('about', {title: 'Matt\'s Title', test: test})
});

//router.get('/about/:var', function(req, res){
//    var test = req.params.var
//    res.send(`
//        <h1>About Matt</h1>
//        <p>${test}</p>
//        <p>Matt is a Security Consultant and chocolate eater extrordinairre!</p>
//    `);
//});

module.exports = router;
