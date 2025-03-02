import { validationResult, ValidationChain } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const handleErrors = (validations: ValidationChain[]) => async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(
        validations.map(validation => validation.run(req))
    );
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).json({
            errors: errors.array().map(error => error.msg),
        })
    }
    next();
};