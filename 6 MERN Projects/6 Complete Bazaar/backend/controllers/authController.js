const User = require("../models/User");
const { firstNameValidator, lastNameValidator, emailValidator, passwordValidator, confirmPasswordValidator, userTypeValidator } = require("./validations");

exports.signup = [
  firstNameValidator,
  lastNameValidator,
  emailValidator,
  passwordValidator,
  confirmPasswordValidator,
  userTypeValidator,
  
  async (req, res, next) => {
    const {firstName, lastName, email, password, confirmPassword, userType} = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({firstName, lastName, email, password: hashedPassword, userType});
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}];