import { Request, Response } from "express";
import { foodModel } from "../model/Food";

export const createFood = async (req : Request, res : Response) => {
    try {
        const {name, image, ingeredient } = req.body
        const result = await foodModel.create({name : name, image : image, ingeredient : ingeredient})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}