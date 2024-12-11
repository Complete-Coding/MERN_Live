const jwt = require('jsonwebtoken');

exports.isLoggedIn = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({error: 'Unauthorized'});
  }

  try {
    const {userId, userType} = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = userId;
    req.userType = userType;
    next();
  } catch (error) {
    return res.status(401).json({error: error.message});
  }
}

exports.isSeller = (req, res, next) => {
  if (req.userType !== 'seller') {
    return res.status(403).json({error: 'Forbidden'});
  }
  next();
}

exports.isCustomer = (req, res, next) => {
  if (req.userType !== 'customer') {
    return res.status(403).json({error: 'Forbidden'});
  }
  next();
}