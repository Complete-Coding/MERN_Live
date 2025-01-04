
const arr =[];
exports.getAddHome = (req, res, next) =>{

    res.render('host/AddHome',{pageTitle: "Add home"})
  
  }


exports.postAddHome = (req, res, next) =>{
  arr.push(req.body)
  res.render('host/HomeAdded',{pageTitle: 'Home added'})
}  


exports.arr = arr;