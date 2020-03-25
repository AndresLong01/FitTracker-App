const db = require("../models")

module.exports = app => {
    app.post("/api/workouts", ({body}, res) => {
        db.Exercise.create({})
            .then(dbExercise => {
                res.json(dbExercise);
            })
            .catch(({message}) => {
                console.log(message);
            });
    })

}