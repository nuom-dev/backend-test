// const trainers = require("./trainers.json");
import Location from "./models/location.js";
import Trainer from "./models/trainer.js";
import Course from "./models/course.js";
import fs from "fs";
import Mongoose from "mongoose";
const courses = JSON.parse(fs.readFileSync("../initial_data/courses.json", 'utf-8'));

Mongoose.connect("mongodb+srv://hayjay:deendeen@cluster0.h9duk.mongodb.net/TrainingBookingSystem?retryWrites=true&w=majority")
const loadData = async () => {
    try {

        await Course.insertMany(courses)
        .then(() => console.log(`Data loaded successfully`))
        process.exit()
    } catch (e) {
        console.log(`error -> ${e}`)
        process.exit()
    }
};
loadData()