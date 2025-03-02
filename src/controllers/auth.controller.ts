import Administrative from "../models/Administrative.model";
import Customer from "../models/Customer.model";
import Seller from "../models/Seller.model";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import config from "../config/config";

export const login = async (req: Request, res: Response): Promise<any> => {

    const { email, password } = req.body;

    try {

        let user: Customer | Seller | Administrative

        user = await Customer.findOne({ where: { email } });

        if (!user) {

            user = await Seller.findOne({ where: { email } });
        }

        if (!user) {

            user = await Administrative.findOne({ where: { email } });
        }

        if (!user) {

            return res.status(404).json({ message: "User  not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {

            return res.status(401).json({ message: "Incorrect credentials" });
        }

        const token = jwt.sign({
                id:user.id,
                email: user.email,
                role: user.role
        }, config.jwt_hash, {expiresIn: '1h'});
    

        return res.status(200).json({ token });

    } catch (error) {

        res.status(500).json({ message: "Error logging in" });
    }
};

export const register = async (req: Request, res: Response): Promise<any> => {

    const { first_name, second_name, first_last_name,
         second_last_name, identification, email, password,
        payment_method, address, cell_phone_number,
           } = req.body;

    try {

        const identificationExists = await Promise.any([
            Customer.findOne({ where: { identification } }),
            Seller.findOne({ where: { identification } }),
            Administrative.findOne({ where: { identification } })
        ]).catch(() => false);

        if (identificationExists) {
            return res.status(400).json({ message: "This user already exists" });
        }

        const emailExists = await Promise.any([
            Customer.findOne({ where: { email } }),
            Seller.findOne({ where: { email } }),
            Administrative.findOne({ where: { email } })
        ]).catch(() => false);

        if (emailExists) {
            return res.status(400).json({ message: "This user already exists" });
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        let user = await Customer.create({ first_name, second_name,
                 first_last_name, second_last_name, identification,
                  email, password: encryptedPassword, role:"customer", payment_method,
                   address, cell_phone_number });


        return res.status(201).json({ user: user });

    } catch (error) {

        res.status(500).json({ message: "Error creating user" });
    }
};
