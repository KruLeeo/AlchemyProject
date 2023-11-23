const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Alc = mongoose.model('Alc', { name: String });

const alc = new Alc({name: 'Edward'});
alc.save().then(() => console.log('Равноценный обмен'));