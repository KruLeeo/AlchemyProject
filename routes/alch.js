const express = require('express');
const router = express.Router();
const Alche = require("../models/alche").Alche;
var async = require("async")

 /* GET users listing. */
 router.get('/', (req, res, next) => {
     res.send('Новый маршрутизатор, для маршрутов, начинающихся с alche');
});


/* Страница героев */
router.get("/:nick", async (req, res, next) => {
  try {
    const alche = await Alche.findOne({ nick: req.params.nick });
    console.log(alche);
    if (!alche) {
      throw new Error("Нет такого!");
    }
    res.render('alche', {
      title: alche.title,
      picture: alche.avatar,
      desc: alche.desc
    });
  } catch (err) {
    next(err);
  }
});





module.exports = router;
