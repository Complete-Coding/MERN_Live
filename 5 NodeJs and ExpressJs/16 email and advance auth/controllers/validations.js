const { check } = require('express-validator');  
  
  // First Name Validator
  exports.firstNameValidation = check('firstName')
  .notEmpty()
  .withMessage("First name is mandatory")
  .trim()
  .isLength({min: 2})
  .withMessage('First Name should be minium 2 chars')
  .matches(/^[a-zA-Z\s]+$/)
  .withMessage('First Name should only contain english aplhabets');

  // Last Name Validator
  exports.lastNameValidation = check('lastName')
  .trim()
  .matches(/^[a-zA-Z\s]*$/)
  .withMessage('Last Name should only contain english aplhabets');

  // Email Validator
  exports.emailValidation = check('email')
  .isEmail()
  .withMessage('Please enter a valid email')
  .normalizeEmail();

  // Password Validator
  exports.passwordValidation = check('password')
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
  exports.confirmPasswordValidation = check('confirm_password')
  .trim()
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Confirm Password does not match Password');
    }
    return true;
  });

  // User Type Validator
  exports.userTypeValidation = check('userType')
  .trim()
  .notEmpty()
  .withMessage('User type is required')
  .isIn(['guest', 'host'])
  .withMessage('User type is invalid');

  // User Type Validator
  exports.termsValidation = check('termsAccepted')
  .notEmpty()
  .withMessage('Terms and Conditions must be accepted');