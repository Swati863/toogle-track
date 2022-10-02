const express = require("express");
const User = require("./User.model");
const Authmiddleware = require("../../middilewares/authentication")

const app = express.Router();


app.post("/signup", async (req, res) => {

    const { email } = req.body;
    try {
        let user = await User.findOne({ email })
        if (user) {
            return res.status(404).send("This email is already in use please change the email and try to signup")
        }
        let newUser = await User.create(req.body)
        res.send({ token: `${newUser.id}:${newUser.email}:${newUser.password}` })

    } catch (er) {
        res.status(500).send(er.message)
    }
})

app.get("/", (req, res) => {
    res.send("Continue Login")
})

// const loginMiddleware = (req, res, next) => {
//     if (!req.headers.token) {
//         return res.status(500).send("Credential not found Please Signup")
//     } else {
//         next()
//     }
// }



app.post("/login", async (req, res) => {

    try {
        let user = await User.findOne({ email: req.body.email, password: req.body.password })

        if (!user) {
            return res.status(400).send("Authentication failed")
        }
        res.send({ token: `${user.id}:${user.email}:${user.password}` })


    } catch (er) {
        res.status(500).send(er.message)
    }
})

module.exports = app;