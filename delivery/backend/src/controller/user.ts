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

export const login = async (req : Request, res : Response) => {
    try {
        const {email, password} : Required<LogIn> = req.body
        const result = await userModel.findOne({email, password})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

