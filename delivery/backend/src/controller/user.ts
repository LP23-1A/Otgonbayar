import { Request, Response } from "express";
import { userModel } from "../model/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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

export const login = async (req: Request, res: Response) => {
    try {
      const { email, password }: { email: string; password: string } =
        req.body;

      const user: LogIn | null = await userModel.findOne({ email });
  
      if (!user) {
        return res.status(201).send({ success: false, msg: 'User not found' });
      }
  
      bcrypt.compare(password, user.password, async function (err, result) {
        if (!result) {
          return res.status(201).send({
            success: false,
            msg: 'Email or password incorrect',
          });
        } else {
          const SECRET_KEY = 'oggy0503';
          const token = jwt.sign({ ...user }, SECRET_KEY);
          return res.send({ success: true, token });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

