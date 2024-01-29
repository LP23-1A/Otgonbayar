import { Request, Response } from "express";
import { userModel } from "../model/user";

type SignUpType = {
    username : string
    email : string
    password : string
}

type LogIn = {
    email : string
    password : string
}

export const createUser = async (req : Request, res : Response) => {
    try {
        const {username, email, password} : Required<SignUpType> = req.body
        const result = await userModel.create({username, email, password })
        console.log(result);      
    } catch (error) {
        console.log(error);
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

