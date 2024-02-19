import { Request, Response } from "express";
import { categoryModel } from "../model/Category";

export const createCategory = async (req : Request, res : Response) => {
    try {
        const {name : name} = req.body
        const result = await categoryModel.create({name : name})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}


