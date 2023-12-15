import { RequestHandler } from "express";
import OrderInterface from "../interfaces/order";
import OrderModel from "../models/order";
import Order from "../repositories/order";

const order: Order = new Order();

export const addOrder:RequestHandler<unknown,unknown,OrderInterface,unknown> = async(req,res,next) => {
    try {
        const { customerId, productsIds } = req.body;
        const newOrder: OrderModel = new OrderModel(undefined,customerId,productsIds);
        
        order.newOrder(customerId,productsIds)
        res.status(200).json(newOrder);
    } catch (error) {
        next(error)
    }
}

export const getOrder:RequestHandler = async(req,res,next) => {
    try {
        const orderId = parseInt(req.params.orderId);
        const orderWithThisId = order.getOrder(orderId);
        res.status(200).json(orderWithThisId);
    } catch (error) {
        next(error)
    }
}

export const getOrders:RequestHandler = async(req,res,next) => {
    try {
        const orders = order.getOrders();
        res.status(200).json(orders);
    } catch (error) {
        next(error)
    }
}