const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    email: {
        type: String,
        unique: [true, "User With this email already exsists!"]
    },
    password: String,
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;