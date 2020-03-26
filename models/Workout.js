const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Declaring a single Model to take care of all.
//This Model has declarations for the day the workout was made, the exercises done that day
//and the total Duration as a declaration to then be populated.
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date().setDate(new Date().getDate())
    },
    exercises: [
        {
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
        }
    ],
    totalDuration: {
        type: Number,
    }
})

//Creating the model as a Mongoose model ready to be exported to other scripts
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;