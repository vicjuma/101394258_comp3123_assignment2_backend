import { request } from 'express';
import EmployeeModel from '../model/index.js';

export const getEmployee = async (req, res) => {
    EmployeeModel.find()
    .then((employees) => res.status(200).json(employees))
    .catch((error) => res.status(400).json(error.message))
}

export const getSingleEmployee = async (req, res) => {
    EmployeeModel.findById(request.params.id)
    .then((employee) => res.status(200).json(employee))
    .catch((error) => res.status(400).json(error.message))
}

export const deleteEmployee = async (req, res) => {
    EmployeeModel.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Employee has been deleted successfully"))
    .catch((error) => res.status(400).json(error.message))
}

export const updateEmployee = async (req, res) => {
    EmployeeModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((employees) => res.status(200).json(employees))
    .catch((error) => res.status(400).json(error.message))
}

export const addEmployee = async (req, res) => {
    EmployeeModel.create(req.body)
    .then((employees) => res.status(200).json(employees))
    .catch((error) => res.status(400).json(error.message))
}