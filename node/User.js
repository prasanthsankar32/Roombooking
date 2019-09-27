const mongoose = require("mongoose");

let Startup = mongoose.model("startups", {
  startupName: {
    type: String
  },
  passWord: {
    type: String
  },
  confPwd: {
    type: String
  },
  email: {
    type: String
  },
  bookings: {
    roomNum: {
      type: Number
    },
    timeSlots: {
      type: Array
    }
  },
  hoursOfUsage: {
    type: Number
  }
});
module.exports = { Startup };
