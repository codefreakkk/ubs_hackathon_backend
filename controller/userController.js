const userModel = require("../model/userModel");

exports.addUser = async (req, res) => {
  try {
    const {
      u_name,
      contact,
      age,
      gender,
      skill,
      experience,
      education,
      interest,
    } = req.body;

    const result = await userModel.create({
      u_name,
      contact,
      age,
      gender,
      skill,
      experience,
      education,
      interest,
    });

    if (result != null) {
      return res
        .status(200)
        .json({ success: true, message: "Data saved successfully" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Data not saved" });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const result = await userModel.find();

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

exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await userModel.find({ _id: id });

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
