import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import Customer from "../models/Customer.model";
import Seller from "../models/Seller.model";
import Administrative from "../models/Administrative.model";

export const createUser = async (req: Request, res: Response): Promise<any> => {

    const { first_name, second_name, first_last_name,
         second_last_name, identification, email, password,
          role, payment_method, address, cell_phone_number,
           appointment } = req.body;

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

        let user: Customer | Seller | Administrative;

        if (role === "customer") {

            user = await Customer.create({ first_name, second_name,
                 first_last_name, second_last_name, identification,
                  email, password: encryptedPassword, role, payment_method,
                   address, cell_phone_number });

        } else if (role === "seller") {

            user = await Seller.create({ first_name, second_name, first_last_name,
                 second_last_name, identification, email, password: encryptedPassword,
                  role, appointment });

        } else if (role === "administrative") {

            user = await Administrative.create({ first_name, second_name, first_last_name,
                 second_last_name, identification, email, password: encryptedPassword,
                  role, appointment });

        } else {

            return res.status(400).json({ message: "Invalid role" });
        }

        return res.status(200).json({ user: user });

    } catch (error) {
        if (!res.headersSent) {
            return res.status(500).json({ message: "Error creating user" });
        }
    }
};


export const getAllUsers = async (req: Request, res: Response): Promise<any> => {

    try {

        const customers = await Customer.findAll();
        const sellers = await Seller.findAll();
        const administrators = await Administrative.findAll();

        const users = [...customers, ...sellers, ...administrators];

        if (users.length == 0) return res.status(400).json({ message:'There are no users created' });

        return res.status(200).json({ users });

    } catch (error) {
        if (!res.headersSent) {
            return res.status(500).json({ message: "Failed to get users" });
        }
    }
};

export const getUser  = async (req: Request, res: Response): Promise<any> => {

    try {

        const { identification } = req.body;

        let user: Customer | Seller | Administrative;


        user = await Customer.findOne({ where: { identification } });
        if (user) {
            return res.status(200).json({ user });
        }

        user = await Seller.findOne({ where: { identification } });
        if (user) {
            return res.status(200).json({ user });
        }

        user = await Administrative.findOne({ where: { identification } });
        if (user) {
            return res.status(200).json({ user });
        }

        return res.status(404).json({ message: "User  not found" });

    } catch (error) {
        if (!res.headersSent) {
            return res.status(500).json({ message: "Error getting user" });
        }

    }
};

export const modifyUser = async (req: Request, res: Response): Promise<any> => {

    const { identification, first_name, second_name, first_last_name,
         second_last_name, email, role, payment_method, address, cell_phone_number,
          appointment } = req.body;

    try {

        let user: Customer | Seller | Administrative;

        if (role === "customer") {
            user = await Customer.findOne({ where: { identification } });

            if (user) {

                await Customer.update({ first_name, second_name, first_last_name,
                     second_last_name, email, payment_method, address,
                      cell_phone_number }, { where: { identification } });

            }

        } else if (role === "seller") {

            user = await Seller.findOne({ where: { identification } });

            if (user) {

                await Seller.update({ first_name, second_name, first_last_name,
                     second_last_name, email, appointment }, { where: { identification } });

            }

        } else if (role === "administrative") {

            user = await Administrative.findOne({ where: { identification } });

            if (user) {

                await Administrative.update({ first_name, second_name, first_last_name,
                     second_last_name, email, appointment }, { where: { identification } });

            }

        } else {

            return res.status(400).json({ message: "Invalid role provided" });
        }

        if (!user) {
            
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "Updated user" });

    } catch (error) {
        if (!res.headersSent) {
         return res.status(500).json({ message: "Error updating user" });
        }
    }
};