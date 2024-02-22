import { Request, Response } from "express";
import { foodModel } from "../model/Food";

import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dlixczuat', 
  api_key: '573177248848726', 
  api_secret: 'vDqnotC2qgU_cbJimp0o6d30rdU' 
});

export const createFood = async (req : Request, res : Response) => {
    try {
        const {name, image, ingeredient } = req.body
        const result = await foodModel.create({name : name, image : image, ingeredient : ingeredient})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export const getallfood = async (req : Request, res : Response) => {
    try {
        const getfood = await foodModel.find()
        res.status(201).send(getfood)
    } catch (error) {
        console.log(error);
        res.status(500)
    }
}

export const deletefood = async (req : Request, res : Response) => {
    try {
        const { foodId } = req.params
        const deleteonefood = await foodModel.findByIdAndDelete(foodId)
        res.status(201).send({success: true, deleteonefood})
        console.log("deleted");
    } catch (error) {
        res.status(500).send(error)
    }
}

export const updatefood = async (req : Request, res : Response) => {
    try {
        const { foodId } = req.params
        const updateonefood = await foodModel.findByIdAndUpdate(foodId)
        res.status(201).send({success: true, updateonefood})
        console.log("updated");
        
    } catch (error) {
        res.status(500).send(error)
    }
}