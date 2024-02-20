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

