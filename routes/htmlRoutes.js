//This is just the HTML, nothing to see here just some boring stuff...
const path = require("path");

module.exports = app => {
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "index.html"));
    })

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    })

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    })
}