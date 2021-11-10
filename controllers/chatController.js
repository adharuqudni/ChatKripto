const db = require('../models');



module.exports = {
  index: (req, res) => {
        res.render('index');
  },
  chat: (req, res) => {
    res.render('chat');
  }
}