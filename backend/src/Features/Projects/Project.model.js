const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    projectName: { type: String, required: true, unique: true },
    client: { type: String },
    private: { type: Boolean, required: false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'tguser' }
},
    {
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
)

const Project = mongoose.model("tgproject", projectSchema)

module.exports = Project;