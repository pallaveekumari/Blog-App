const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 1, maxlength: 50 },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
         validator: (value) => {
           
              return /\S+@\S+\.\S+/.test(value);
         },
         message: 'Invalid email format',
    },
  },
  password: { type: String, required: true },
  bio: { type: String, maxlength: 200 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const userModel = mongoose.model("User", userSchema);

module.exports = {
  userModel,
};

