const Alche = require("./../models/alche").Alche;
module.exports = async function(req, res, next) {
    try {
      res.locals.nav = [];
      const result = await Alche.find({}, { _id: 0, title: 1, nick: 1 });
      res.locals.nav = result;
      next();
      
    } catch (err) {
      throw err;
    }
};