var mongoose = require('mongoose')
const { alcheSchema } = require('./models/alche')
mongoose.connect('mongodb://localhost/test1')
var Alche = require("./models/alche").Alche
var alche = new Alche({
title: "Эдвард",
})
    var alche = new Alche({
        title: "Альфонс Элрик",
        nick: "alphonse"
        })
console.log(alche)
alche.save()