const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {pageTitle: 'Login', isLoggedIn: false});
}

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {pageTitle: 'Login', isLoggedIn: false});
}

exports.postLogin = async (req, res, next) => {
  const {email, password} = req.body;
  console.log(email, password);
  try {
    const user = await User.findOne({email});
    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(user, isMatch);
    if (!isMatch) {
      throw new Error('Password does not match');
    }

    req.session.isLoggedIn = true;
    req.session.user = user;
    await req.session.save();

    res.redirect("/");

  } catch(err) {
    res.render('auth/login', {
      pageTitle: 'Login',
      isLoggedIn: false,
      errorMessages: [err.message]
    });
  }
}

exports.postSignup = [
  // First Name Validator
  check('firstName')
  .notEmpty()
  .withMessage("First name is mandatory")
  .trim()
  .isLength({min: 2})
  .withMessage('First Name should be minium 2 chars')
  .matches(/^[a-zA-Z\s]+$/)
  .withMessage('First Name should only contain english aplhabets'),

  // Last Name Validator
  check('lastName')
  .trim()
  .matches(/^[a-zA-Z\s]*$/)
  .withMessage('Last Name should only contain english aplhabets'),

  // Email Validator
  check('email')
  .isEmail()
  .withMessage('Please enter a valid email')
  .normalizeEmail(),

  // Password Validator
  check('password')
  .trim()
  .isLength({min: 8})
  .withMessage('Password should be minium 8 chars')
  .matches(/[a-z]/)
  .withMessage('Password should have atleast one small alphabet')
  .matches(/[A-Z]/)
  .withMessage('Password should have atleast one capital alphabet')
  .matches(/[!@#$%^&*_":?]/)
  .withMessage('Password should have atleast one Special Character'),

  // Confirm Password Validator
  check('confirm_password')
  .trim()
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Confirm Password does not match Password');
    }
    return true;
  }),

  // User Type Validator
  check('userType')
  .trim()
  .notEmpty()
  .withMessage('User type is required')
  .isIn(['guest', 'host'])
  .withMessage('User type is invalid'),

  // User Type Validator
  check('termsAccepted')
  .notEmpty()
  .withMessage('Terms and Conditions must be accepted'),

  (req, res, next) => {
    console.log('User came for signup: ', req.body);
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(422).render('auth/signup', 
        {
          pageTitle: 'Login', 
          isLoggedIn: false,
          errorMessages: errors.array().map(err => err.msg),
          oldInput: req.body,
        })
    }

    const {firstName, lastName, email, password, userType} = req.body;
    bcrypt.hash(password, 12).then(hashedPassword => {
      const user = new User({
        firstName, lastName, email, password: hashedPassword, userType
      });
  
      user.save().then(result => {
        console.log(result);
        res.redirect("/login");
      }).catch(error => {
        return res.status(422).render('auth/signup', 
          {
            pageTitle: 'Login', 
            isLoggedIn: false,
            errorMessages: [error],
            oldInput: req.body,
          })
      });
    })
  }
];

exports.postLogout = (req, res, next) => {
  req.session.destroy();
  res.redirect("/login");
}