
const {arr} = require('../controllers/hostController')

exports.getHome = (req, res, next) =>{

  res.render('store/index',{pageTitle: 'Home Page', homes: arr})
}


