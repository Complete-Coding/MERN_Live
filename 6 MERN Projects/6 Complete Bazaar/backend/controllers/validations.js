const { check } = require('express-validator');

// First Name Validator
const firstNameValidator = check('firstName')
  .notEmpty()
  .withMessage("First name is mandatory")
  .trim()
  .isLength({min: 2})
  .withMessage('First Name should be minium 2 chars')
  .matches(/^[a-zA-Z\s]+$/)
  .withMessage('First Name should only contain english alphabets');

// Last Name Validator
const lastNameValidator = check('lastName')
  .trim()
  .matches(/^[a-zA-Z\s]*$/)
  .withMessage('Last Name should only contain english alphabets');

// Email Validator
const emailValidator = check('email')
  .isEmail()
  .withMessage('Please enter a valid email')
  .normalizeEmail();

// Password Validator
const passwordValidator = check('password')
  .trim()
  .isLength({min: 8})
  .withMessage('Password should be minium 8 chars')
  .matches(/[a-z]/)
  .withMessage('Password should have atleast one small alphabet')
  .matches(/[A-Z]/)
  .withMessage('Password should have atleast one capital alphabet')
  .matches(/[!@#$%^&*_":?]/)
  .withMessage('Password should have atleast one Special Character');

// Confirm Password Validator
const confirmPasswordValidator = check('confirmPassword')
  .trim()
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Confirm Password does not match Password');
    }
    return true;
  });

// User Type Validator
const userTypeValidator = check('userType')
  .trim()
  .notEmpty()
  .withMessage('User type is required')
  .isIn(['seller', 'customer'])
  .withMessage('User type is invalid');

module.exports = {
  firstNameValidator,
  lastNameValidator,
  emailValidator,
  passwordValidator,
  confirmPasswordValidator,
  userTypeValidator
};