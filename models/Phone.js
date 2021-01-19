const mongoose = require('mongoose');

const PhoneSchema = new mongoose.Schema({
  name:{
      type:String,
  },
  phonenumber:{
      type:String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});



module.exports = mongoose.model('Phone', PhoneSchema);