const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const sendGrid = require('@sendgrid/mail');
const { firstNameValidation, lastNameValidation, emailValidation, passwordValidation, confirmPasswordValidation, userTypeValidation, termsValidation } = require('./validations');

const MILLIS_IN_MINUTE = 60 * 1000;
const SEND_GRID_KEY = process.env.SENDGRID_API_KEY;
sendGrid.setApiKey(SEND_GRID_KEY);

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {pageTitle: 'Login', isLoggedIn: false});
}

exports.getForgotPassword = (req, res, next) => {
  res.render('auth/forgot', {pageTitle: 'Forgot Password', isLoggedIn: false});
}

exports.getResetPassword = (req, res, next) => {
  const {email} = req.query;
  res.render('auth/reset_password', {
    pageTitle: 'Reset Password',
    isLoggedIn: false,
    email: email,
  });
}

exports.postResetPassword = [
  passwordValidation,
  confirmPasswordValidation,
  
  async (req, res, next) => {
  const {email, otp, password, confirm_password} = req.body;
  const errors = validationResult(req);
    
  if (!errors.isEmpty()) {
    return res.status(422).render('auth/reset_password', 
      {
        pageTitle: 'Reset Password',
        isLoggedIn: false,
        email: email,
        errorMessages: errors.array().map(err => err.msg),
      })
  }

  try {
    console.log(req.body);
    const user = await User.findOne({email});
    if (!user) {
      throw new Error('User not found');
    } else if (user.otpExpiry < Date.now()) {
      throw new Error('OTP Expired');
    } else if (user.otp !== otp) {
      throw new Error('OTP does not match');
    }

    const hashedPassword = bcrypt.hash(password, 12);
    user.password = (await hashedPassword).toString();
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    res.redirect("/login");

  } catch (err) {
    console.log(err);
    res.render('auth/reset_password', {
      pageTitle: 'Reset Password',
      isLoggedIn: false,
      email: email,
      errorMessages: [err.message]
    });
  }

}]

exports.postForgotPassword = async (req, res, next) => {
  const {email} = req.body;
  try {
    const user = await User.findOne({email});
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp;
    user.otpExpiry = Date.now() + 20 * MILLIS_IN_MINUTE;
    await user.save();

    const forgotEmail = {
      to: email,
      from: process.env.FROM_EMAIL,
      subject: 'Here is your OTP to reset your Password',
      html: `<h1> OTP is: ${otp}</h1>
      <p> Enter this OTP on <a href="http://localhost:3001/reset-password?email=${email}">Reset Password</a> page. </p>
      `
    };

    await sendGrid.send(forgotEmail);
    
    res.redirect(`/reset-password?email=${email}`);
  } catch (err) {
    res.render('auth/forgot', {
      pageTitle: 'Forgot Password',
      isLoggedIn: false,
      errorMessages: [err.message]
    });
  }
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
  firstNameValidation,
  lastNameValidation,
  emailValidation,
  passwordValidation,
  confirmPasswordValidation,
  userTypeValidation,
  termsValidation,
  
  async (req, res, next) => {
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

    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        firstName, lastName, email, password: hashedPassword, userType
      });
      await user.save();

      const welcomeEmail = {
        to: email,
        from: process.env.FROM_EMAIL,
        subject: 'Welcome to Apna airbnb !!!',
        html: `<h1> Welcome ${firstName} ${lastName} Please book your first vacation home with us.</h1>`
      };

      await sendGrid.send(welcomeEmail);

      return res.redirect("/login");
    } catch (err) {
      return res.status(422).render('auth/signup', 
        {
          pageTitle: 'Login', 
          isLoggedIn: false,
          errorMessages: [err.message],
          oldInput: req.body,
        })
    }
  }
];

exports.postLogout = (req, res, next) => {
  req.session.destroy();
  res.redirect("/login");
}