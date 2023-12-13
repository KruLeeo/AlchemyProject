const express = require('express');
const router = express.Router();
const Alche = require("../models/alche").Alche;
var async = require("async");
var checkAuth = require("./../middleware/checkAuth.js");



 /* GET users listing. */

/* Страница героев */
router.get('/:nick', checkAuth, async function(req, res, next) {
  try {
    const [alche, alchemy] = await Promise.all([
      Alche.findOne({ nick: req.params.nick }),
      Alche.find({}, { _id: 0, title: 1, nick: 1 })
    ]);
  
    if (!alche) {
      throw new Error("Нет такого");
    }
    
    renderAlche(res, alche.title, alche.avatar, alche.desc, alchemy);
  } catch (err) {
    next(err);
  }
});

function renderAlche(res, title, picture, desc, alchemy) {
  console.log(alchemy);

  res.render('alche', {
    title: title,
    picture: picture,
    desc: desc
  });
}
module.exports = router;
