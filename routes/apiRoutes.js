const db = require("../models")

module.exports = app => {
    //I used this to update total duration..
    let aggregate;

    app.post("/api/workouts", ({body}, res) => {
        //Initialized the aggregate at 0 per new workout to prevent bleed-over.
        aggregate=0;
        db.Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(({message}) => {
                console.log(message);
            });
    })

    //This is the most interesting part of the whole thing honestly...
    app.put("/api/workouts/:id", (req, res) => {
        //Grabbing id from parameters and declaring data as req.body
        let id= req.params.id;
        let data = req.body;
        //console.log(data);

        //This aggregate exists for the total duration. Tried using the aggregate method
        //that mongoose provides, but in all honesty this was way easier and faster.
        aggregate += data.duration;
        //console.log(aggregate)

        //Updating all the values in database using the ID created by hitting the new workout button
        db.Workout.findOneAndUpdate({_id: id}, { 
            $push: {exercises: data},
            totalDuration: aggregate
        }, {new: true}
        ).then(dbUpdate => {
            //console.log(dbUpdate)
            res.send(dbUpdate);
        })
    })
    // GET methods to control the Summary and the stats pages
    app.get("/api/workouts/", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
    })
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(data => {
                res.json(data);
            })
    })
}