var express = require('express');
var router = express.Router();
const Alche = require("../models/alche").Alche


/* GET home page. */  
  router.get('/', async(req, res, next) => {
    try{
      const menu = await Alche.find({}, { _id: 0, title: 1, nick: 1 });
      res.render('index', { title: 'Alchemy',counter:req.session.counter });
    }
    catch (err) {next(err);}
});


module.exports = router;