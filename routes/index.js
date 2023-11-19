var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Edward', function(req, res, next) {
  res.render('alc', {
  title: "Эдвард Элрик",
  picture: "images/Edward.jpg",
  desc: "Старший сын, потерял мать и руку"
  });
  });
  router.get('/Alphonse', function(req, res, next) {
    res.render('alc', {
    title: "Альфонс Элрик",
    picture: "images/Alphonse.jpg",
    desc: "Младший сын, потерял тело"
    });
  });
    router.get('/Winry', function(req, res, next) {
      res.render('alc', {
      title: "Винри Рокбелл",
      picture: "images/winry.jpg",
      desc: "Механик, подруга двух братьев"
      });
    });
module.exports = router;
