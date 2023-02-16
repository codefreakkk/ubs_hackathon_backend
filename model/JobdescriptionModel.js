const mongoose = require("mongoose");


//  add validations later
const jdModel = mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    job_name: {
        type: String,
        require: true,
    },
    job_desc: {
        type: String,
        require: true,
    },
    job_role: {
        type: String,
        require: true,
    },
    job_skills: {
        type: [],
        default: [],
        require: true,
    },
    job_experience: {
        type: String,
        require: true,
    },
    education: {
        type: String,
        require: true,
    },
    location: {
        type: String, 
        require: true
    }
});

module.exports = new mongoose.model("jdModel", jdModel);