const express = require("express")
const Authmiddleware = require("../../middilewares/authentication");
const Projects = require("./Project.model")

const app = express.Router()
app.use(Authmiddleware)


app.get("/", async (req, res) => {
    const [id, email, password] = req.headers.token.split(":");
    try {
        let project = await Projects.find({ userId: id })
        res.send(project)
    } catch (er) {
        res.status(401).send(er.message)
    }
})

app.post("/", async (req, res) => {
    const [id, email, password] = req.headers.token.split(":");
    console.log(req.headers.token)

    let project = await Projects.find({ projectName: req.body.projectName, userId: id });

    if (project.length === 0) {
        let newProject = await Projects.create({ ...req.body, userId: id })
        res.send(newProject)
    } else {
        res.send("Project needs update")
    }

})

// app.patch("/:id", async (req, res) => {
//     let { id } = req.params
//     try {
//         let project = await Projects.findByIdAndUpdate(id)
//         res.send(project)
//     } catch (er) {
//         res.status(404).send(er.message)
//     }
// })

app.delete("/:id", async (req, res) => {
    let { id } = req.params
    try {
        let project = await Projects.findByIdAndDelete(id)
        res.send(project)
    } catch (er) {
        res.status(404).send(er.message)
    }
})


module.exports = app;