const express = require("express")
const Task = require("./Task.model");
const Projects = require("../Projects/Project.model")
const User = require("../User/User.model")
const Authmiddleware = require("../../middilewares/authentication")

let app = express.Router();
app.use(Authmiddleware)

app.get("/", async (req, res) => {
    let { projectid } = req.headers
    try {
        let task = await Task.find({ projectId: projectid })
        res.send(task)
    } catch (er) {
        res.status(500).send(er.message)
    }
})

app.post("/", async (req, res) => {
    const [id, email, password] = req.headers.token.split(":");
    let { projectid } = req.headers

    //    first find the task if task is already exist in that project then you should not add that task there
    try {
        let task = await Task.find({ projectId: projectid, taskName: req.body.taskName })

        if (task) {
            const taskName = await Task.create({ ...req.body, userId: id, projectId: projectid })
            res.send(taskName)
        } else {
            res.send("Task is already added in this Project")
        }
    } catch (er) {
        res.status(500).send(er.message)
    }
})

app.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        let updatedTask = await Task.findByIdAndDelete(id);
        res.send(updatedTask)
    } catch (er) {
        res.status(404).send(er.message)
    }

})

app.patch("/:id", async (req, res) => {
    const { id } = req.params
    try {
        let updatedTask = await Task.findByIdAndUpdate(id, { $set: { taskName: req.body.taskName } }, { new: true });
        res.send(updatedTask)
    } catch (er) {
        res.status(404).send(er.message)
    }
})



module.exports = app;