import { RequestHandler } from "express";
import CustomerInterface from "../interfaces/customer";
import Customer from "../repositories/customer";
import CustomerModel from "../models/customer";

const customer: Customer = new Customer();

export const addCustomer:RequestHandler<unknown,unknown,CustomerInterface,unknown> = async(req,res,next) => {
    try {        
        const { name, address, email } = req.body;
        const newCustomer: CustomerModel = new CustomerModel(undefined, name, address, email);


        customer.addCustomer(newCustomer);
        res.status(201).json({message: "success", newCustomer})
    } catch (error) {
        next(error)
    }
}

export const getCustomers:RequestHandler = async(req,res,next) => {
    try {
        const customers = customer.getCustomers();
        res.status(200).json(customers);
    } catch (error) {
        next(error)
    }
}