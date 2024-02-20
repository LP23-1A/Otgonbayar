import { Request, Response } from "express";
import { orderModel } from "../model/Order";

export const createOrder = async (req : Request, res : Response) => {
    try {
        const {orderNumber, district, khoroo, apartment} = req.body
        const result = await orderModel.create({orderNumber : orderNumber, district : district, khoroo : khoroo, apartment : apartment})
        res.send(result)
    } catch (error) {
        console.log(error);
    }
}

export const deleteOrder = async (req : Request, res : Response) => {
    try {
        const { name } = req.body
        const deleteoneorder = await orderModel.findOneAndDelete({name})
        res.status(201).send(deleteoneorder)
    } catch (error) {
        res.status(500)
        console.log(error);
    }
}

export const updateOrder = async (req : Request, res : Response) => {
    try {
        const { orderId } = req.params
        const updateoneorder = await orderModel.findByIdAndUpdate(orderId)
        res.status(201).send({success: true, updateoneorder})
        console.log("updated");
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getAllOrder = async (req : Request, res : Response) => {
    try {
        const getOrder = await orderModel.find()
        res.status(201).send(getOrder)
    } catch (error) {
        console.log(error);
        res.status(500)
    }
}
