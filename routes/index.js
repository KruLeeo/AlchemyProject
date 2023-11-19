var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Edward', function(req, res, next) {
  res.send("<h1>Страница Эдварда</h1>")
  });
  router.get('/Alphonse', function(req, res, next) {
    res.send("<h1>Страница Альфонса</h1>")
    });
    router.get('/Winry', function(req, res, next) {
      res.send("<h1>Страница Винри</h1>")
      });
      
  

module.exports = router;
