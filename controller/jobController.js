const jdModel = require("../model/JobdescriptionModel");
const userModel = require("../model/userModel");

exports.addJobs = async (req, res) => {
  try {
    const {
      job_name,
      job_desc,
      job_role,
      job_skills,
      job_experience,
      education,
      location,
    } = req.body;

    const result = await jdModel.create({
      job_name,
      job_desc,
      job_role,
      job_skills,
      job_experience,
      education,
      location,
    });

    if (result != null) {
      return res
        .status(200)
        .json({ success: true, message: "Data saved successully" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Data not saved error occured" });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const result = await jdModel.find();
    if (result != null) {
      return res.status(200).json({ success: true, data: result });
    } else {
      return res.status(400).json({ success: false, data: null });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};

exports.getJobById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await jdModel.findOne({ _id: id });
    if (result != null) {
      return res.status(200).json({ success: true, data: result });
    } else {
      return res.status(400).json({ success: false, data: null });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};

exports.getRecomendedUser = async (req, res) => {
  try {
    const jid = req.params.id;
    const job = await jdModel.findOne({ _id: jid });

    //  convert skills to lower case
    let skillSet = job.job_skills;
    const jdSkills = [];
    for (let i = 0; i < skillSet.length; i++) {
      jdSkills[i] = skillSet[i].toLowerCase().trim();
    }

    const user = await userModel.find();
    let finalUser = [];
    // traverse for every user and run the algorithm
    user.map((res) => {
      const userSkills = res.skill;
      for (let i = 0; i < userSkills.length; i++) {
        userSkills[i] = userSkills[i].toLowerCase().trim();
      }
      let count = 0;
      for (let i = 0; i < userSkills.length; i++) {
        if (jdSkills.includes(userSkills[i])) {
          count++;
        }
      } 
      // match percentile
      const match = (count / jdSkills.length) * 100;
      console.log(res.u_name + " " + match);
      if (match >= 40) {
        finalUser.push({ data: res, match: match });
      }
      // console.log(job.job_name);
    });
    return res.status(200).json({ job_name: job.job_name, user: finalUser });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};
