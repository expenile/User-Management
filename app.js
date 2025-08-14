require('dotenv').config();
const express = require("express");
const path = require("path");
const userModel = require("./models/user");
const app = express();
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", async (req, res) => {
  try {
    let users = await userModel.find();
    res.render("read", { users });
  } catch (error) {
    console.error("Error reading users:", error);
    res.status(500).send("Error reading users");
  }
});
app.post("/create", async (req, res) => {
  try {
    let { name, email, image } = req.body;
    let createdUser = await userModel.create({
      name,
      email,
      image,
    });
    res.redirect("/read");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
});

app.get("/delete/:id", async (req, res) => {
  try {
    let users = await userModel.findOneAndDelete({ _id: req.params.id });
    res.redirect("/read");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Error deleting user");
  }
});
app.get("/edit/:userid", async (req, res) => {
  try {
    let user = await userModel.findOne({ _id: req.params.userid });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.render("edit", { user });
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).send("Error finding user");
  }
});
app.post("/update/:userid", async (req, res) => {
  try {
    let { name, email, image } = req.body;
    let user = await userModel.findOneAndUpdate(
      { _id: req.params.userid },
      { name, email, image },
      { new: true }
    );
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.redirect("/read");
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send("Error updating user");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
