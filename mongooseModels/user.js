
// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the noteSchema with the schema object
var userSchema = new Schema({

  // date is just a string
  first_name: {
    type: String,
    required: true,
    unique: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },

  Profile: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}]

});

// Create the Note model using the noteSchema
var User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;