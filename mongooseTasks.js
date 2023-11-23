var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
var schema = mongoose.Schema({ name: String })
schema.methods.obmen = function(){
console.log(this.get("name") + " Сказал 'Равноценный обмен'")
}
var alc = mongoose.model('Alc', schema)

var alc = new alc({ name: 'Edward' });
alc.save().then(() => alc.obmen());