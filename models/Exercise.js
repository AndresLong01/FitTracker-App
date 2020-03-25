const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    instance: {
        type: String,
    },
    type: {
        type: String,
        allownull: false
    },
    name: {
        type: String,
        allownull: false
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
})
const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;