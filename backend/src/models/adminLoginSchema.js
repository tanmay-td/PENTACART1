const mongoose = require("mongoose");
const SALT_I = 10;
mongoose.set("strictQuery", false);

const bcrypt = require("bcryptjs");

const adminLoginSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },

  password: {
    type: String,
    require: true,
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

// Password hasing
// adminLoginSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 12);
//   }
//   next();
// });

adminLoginSchema.pre("save", function (next) {
  let adminSchema = this;

  if (adminSchema.isModified("password")) {
    bcrypt.genSalt(SALT_I, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(adminSchema.password, salt, function (err, hash) {
        if (err) return next(err);

        adminSchema.password = hash;

        console.log("hash password = ", hash);

        next();
      });
    });
  } else {
    next();
  }
});

const AdminLoginSchema = new mongoose.model("AdminLogin", adminLoginSchema);

module.exports = AdminLoginSchema;
