const routes = require("express").Router()
const EmployeeModel = require("../model/index.js")
const bcrypt = require("bcrypt")

routes.route("/:id").get((req, res) => {
    EmployeeModel.findById(req.params.id)
    .then((employee) => res.status(200).json(employee))
    .catch((error) => res.status(400).json(error.message))
})

routes.route("/").get((req, res) => {
    EmployeeModel.find()
    .then((employees) => res.status(200).json(employees))
    .catch((error) => res.status(400).json(error.message))
})

routes.route("/delete/:id").delete((req, res) => {
    EmployeeModel.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Employee has been deleted successfully"))
    .catch((error) => res.status(400).json(error.message))
})
routes.route("/update/:id").put((req, res) => {
    EmployeeModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((employees) => res.status(200).json(employees))
    .catch((error) => res.status(400).json(error.message))
})

routes.route("/").post(async (req, res) => {
    const { firstName, lastName, emailId, password } = req.body;

    try {
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        const data = new EmployeeModel({
            firstName,
            lastName,
            emailId,
            password: hashedPassword,
        });

        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.error(error);
    }
});

routes.post('/login', async (req, res) => {
    const { emailId, password } = req.body;
  
    try {
      const user = await EmployeeModel.findOne({ emailId });
        if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
        const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (isPasswordValid) {
        return res.status(200).json({ success: true, message: 'Login successful' });
      } else {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });

module.exports = routes