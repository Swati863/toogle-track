const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    taskName: { type: String, required: true, unique: true },
    day: { type: String, required: true },
    time: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "tguser" },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "tgproject" }
},
    {
        versionKey: false,
        timestamps: {
            createdAt: true,
            updatedAt: true
        }
    }
)

const Task = mongoose.model("tgtask", taskSchema)

module.exports = Task;