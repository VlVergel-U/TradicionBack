import jwt from "jsonwebtoken";
import config from "../config/config";
import { Request, Response, NextFunction } from "express";

export const handleToken = (allowedRoles: string[] = []) => {
    return (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header("Authorization");
    console.log(`Token received: ${token}`);

    if (!token) {
        res.status(401).json({
            success: false,
            msg: 'Authorization required'
        });
    }

    const splitToken = token.split(" ");

    if (splitToken[0] !== "Bearer") {
        res.status(401).json({
            success: false,
            msg: 'Authorization required'
        });
    }
    jwt.verify(splitToken[1], config.jwt_hash, (error, decode)=>{
        if(error){
           return res.status(401).json({
              success: false,
              msg: 'Authorization required'
           })
        
        }

        if (allowedRoles.length > 0) {
            const userRole = (decode as {role: string }).role;
            if (!allowedRoles.includes(userRole)) {
                res.status(403).json({
                    success: false,
                    msg: "You do not have permission to access",
                });
                return;
            }
        }
        
        next();
    });
};
};