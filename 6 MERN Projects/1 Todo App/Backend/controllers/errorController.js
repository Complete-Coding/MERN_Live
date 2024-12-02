exports.get404 = (req, res, next) => {
  console.log(req);
  res.status(404).json({message: "Page not found"});
};