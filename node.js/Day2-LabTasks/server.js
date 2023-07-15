//#region Requires
const express = require("express");
const app = express();
const path = require("path");
let bodyParser = require("body-parser");
const mongoose = require("mongoose");
let PORT = process.env.PORT || 7002;
//#endregion

//#region Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//#endregion

//#region Mongoose Configuration
mongoose.connect("mongodb://0.0.0.0:27017/School");
//[Schema] ==> model
let studentsSchema = new mongoose.Schema({
  school: String,
  sex: String,
  //   age: Number,
  address: String,
  famsize: String,
  Pstatus: String,
  //   Medu: Number,
  //   Fedu: Number,
  Mjob: String,
  Fjob: String,
  reason: String,
  guardian: String,
  //   traveltime: Number,
  //   studytime: Number,
  //   failures: Number,
  schoolsup: String,
  famsup: String,
  paid: String,
  activities: String,
  nursery: String,
  higher: String,
  internet: String,
  romantic: String,
  //   famrel: Number,
  //   freetime: Number,
  //   goout: Number,
  //   Dalc: Number,
  //   Walc: Number,
  //   health: Number,
  //   absences: Number,
  //   G1: Number,
  //   G2: Number,
  //   G3: Number
});
//Model
let students = mongoose.model("students", studentsSchema);
//#endregion

//#region Requests
mongoose.connection.on("error", () => {
  console.log("Warning! Error :(");
});
mongoose.connection.once("open", () => {
  console.log("Connected Successfully TO DB");
  //All Requests
  app.get("/", async (req, res) => {
    let Data = await students.find();
    res.render("home.ejs", { Data });
    // res.json(Data);
  });
  app.post("/", async (req, res) => {
    // console.log(req.body);
    let newStudent = new students({
      school: "Koky",
      sex: "F",
      address: "123st",
      famsize: "3",
    });
    await newStudent.save();
    res.send("You can add :)");
  });
});
// app.put("/:school", async (req, res) => {
//   const school = req.params.school;
//   let update = await students.find({ school: "Koky" });
//   update.address = "456st";
//   console.log(update);
//   res.send(`School ${school} updated`);
// });

app.put("/:school", async (req, res) => {
  const school = req.params.school;
  const filter = { school: school };
  const update = { address: "456st" };
  const options = { new: true };
  let updatedStudent = await students.findOneAndUpdate(filter, update, options);
  console.log(updatedStudent);
  res.send(`School ${school} updated`);
});

app.delete("/:school", async (req, res) => {
    const delSchool = req.params.school;
    const deletedSchool = await students.findOneAndDelete({school: delSchool});
    res.send(`School ${deletedSchool.school} deleted successfully`);
  });
//#endregion

app.listen(PORT, () => {
  console.log("http://www.localhost:" + PORT);
});
