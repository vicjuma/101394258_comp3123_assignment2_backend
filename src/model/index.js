const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        emailId: {type: String, required: true},
        password: {type: String, required: false}
    },
    {collection: "employeesCollection"}
)

module.exports = mongoose.model("EmployeeModel", EmployeeSchema);