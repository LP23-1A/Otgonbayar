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

export const updatecategory = async (req : Request, res : Response) => {
    try {
        const { categoryId } = req.params
        const updateonecategory = await categoryModel.findByIdAndUpdate(categoryId)
        res.status(201).send(updateonecategory)
    } catch (error) {
        res.status(500)
        console.log(error);
    }
}

export const deletecategory = async (req : Request, res : Response) => {
    try {
        const { categoryId } = req.params
        const deleteonecategory = await categoryModel.findByIdAndDelete(categoryId)
        res.status(201).send(deleteonecategory)
    } catch (error) {
        res.status(500)
        console.log(error);
    }
}

export const getallcategory = async (req : Request, res : Response) => {
    try {
        const getcategory = await categoryModel.find()
        res.status(201).send(getcategory)
    } catch (error) {
        console.log(error);
        res.status(500)
    }
}