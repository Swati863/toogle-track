const express = require("express")
const dbConnect = require("./config/database")
const cors = require("cors")
const userRouter = require("./Features/User/User.router")
require('dotenv').config()
const projectRouter = require("./Features/Projects/Project.router")
const taskRouter = require("./Features/Task/Task.router")
const PORT = process.env.PORT || 8080


const app = express()
app.use(express.json())
app.use(cors())
app.use("/users", userRouter)
app.use("/projects", projectRouter)
app.use("/tasks", taskRouter)

app.get("/", (req, res) => {
    res.send("Welcome to toggl.com")
})

app.listen(PORT, async () => {
    try {
        await dbConnect()
        console.log(`server is running on port ${PORT}`)
    } catch (er) {
        console.log(er)
    }
})

