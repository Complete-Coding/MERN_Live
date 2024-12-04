const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  withFields : {type: String, required: true},
  noFields: String,
  relatedModel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
});

module.exports = mongoose.model("Example", exampleSchema);