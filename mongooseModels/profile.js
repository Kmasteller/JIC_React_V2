
// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the noteSchema with the schema object
var addSchema = new Schema({

  // date is just a string
  // username: {
  //   type: String,
  //   required: true,
  //   unique: true
  // },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  // email: {
  //   type: String,
  //   required: true
  // },
  // password: {
  //   type: String,
  //   required: true
  // },
  // profilePic: {
  //   type: String,
  //   required: false
  // },
  // isAdmin: {
  //   type: Boolean,
  //   default: false
  // },
  photo: {
    type: String,
    required: false
  },
  birthdate: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  height: {
    type: String,
    required: false
  },
  weight: {
    type: String,
    required: false
  },
  hair: {
    type: String,
    required: false
  },
  eyes: {
    type: String,
    required: false
  },

  User: {type: mongoose.Schema.Types.ObjectId, ref: "User"}

});

// Create the Add model using the addSchema
var Profile = mongoose.model("Profile", addSchema);

// Export the Add model
module.exports = Profile;