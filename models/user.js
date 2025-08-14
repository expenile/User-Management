const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/UserPro")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  image: String,
});

module.exports = mongoose.model("user", userSchema);
