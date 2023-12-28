const express = require('express');
const router = express.Router();
// const Alche = require("../models/alche").Alche;
var async = require("async");
var db = require('../mySQLConnect.js');
// var checkAuth = require("./../middleware/checkAuth.js");

router.get("/:nick", function(req, res, next) {
  db.query(`SELECT * FROM alchemists WHERE alchemists.nick = '${req.params.nick}'`, (err,alchemists) => {
  if(err) {
    console.log(err);
    if(err) return next(err)
    } else {
      if(alchemists.length == 0) return next(new Error("Такого алхимика нет"))
        var alche = alchemists[0];
        res.render('alche', {
          title: alche.title,
          picture: alche.avatar,
          desc: alche.about
  })
}
})

});



/* GET users listing. */

// /* Страница героев */
// router.get('/:nick', checkAuth, async function(req, res, next) {
//   try {
//     const [alche, alchemy] = await Promise.all([
//       Alche.findOne({ nick: req.params.nick }),
//       Alche.find({}, { _id: 0, title: 1, nick: 1 })
//     ]);
  
//     if (!alche) {
//       throw new Error("Нет такого");
//     }
    
//     renderAlche(res, alche.title, alche.avatar, alche.desc, alchemy);
//   } catch (err) {
//     next(err);
//   }
// });

// function renderAlche(res, title, picture, desc, alchemy) {
//   console.log(alchemy);

//   res.render('alche', {
//     title: title,
//     picture: picture,
//     desc: desc
//   });
// }
module.exports = router;


