const mongoose = require("mongoose");

let Admin = mongoose.model("admin", {
  adminName: {
    type: String
  },
  passWord: {
    type: String
  }
});

module.exports = { Admin };
