import { Request, Response } from "express";
import { userModel } from "../model/user";
import jwt from "jsonwebtoken";

type SignUpType = {
    username : string
    email : string
    number : number
    password : string
}

type LogIn = {
    email : string
    password : string
}

export const createUser = async (req : Request, res : Response) => {
    try {
        const {username, email, number, password} : Required<SignUpType> = req.body
        const result = await userModel.create({username : username, email : email, number : number, password : password })
        console.log(result); 
        res.send(result)     
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (req : Request, res : Response) => {
    try {
        const { userId } = req.params
        const deleteOneUser = await userModel.findByIdAndDelete(userId)
        res.status(201).send(deleteOneUser)
    } catch (error) {
        res.status(500)
        console.log(error);
    }
}

export const getAllUser = async (req : Request, res : Response) => {
    try {
        const getUser = await userModel.find()
        res.status(201).send(getUser)
    } catch (error) {
        console.log(error);
        res.status(500)
    }
}

export const updateUser = async (req : Request, res : Response) => {
    try {
        const { userId } = req.params
        const updateOneUser = await userModel.findByIdAndUpdate(userId)
        res.status(201).send({success: true, updateOneUser})
        console.log("updated");
    } catch (error) {
        res.status(500).send(error)
    }
}

export const login = async (req : Request, res : Response) => {
    try {
        const {email, password} : Required<LogIn> = req.body
        const result = await userModel.findOne({email, password})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

