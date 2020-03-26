const db = require("../models")

module.exports = app => {
    app.post("/api/workouts", ({body}, res) => {
        db.Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(({message}) => {
                console.log(message);
            });
    })
    app.put("/api/workouts/:id", (req, res) => {
        let id= req.params.id;
        let data = req.body;
        console.log(data)
        db.Workout.findOneAndUpdate({_id: id}, 
            {exercises: data}
        ).then(dbUpdate => {
            console.log(dbUpdate)
            res.send(dbUpdate);
        })
    })
    app.get("/api/workouts/", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
    })
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(dbRange)
    })
}