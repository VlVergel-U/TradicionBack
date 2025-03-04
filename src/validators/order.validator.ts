import { checkSchema } from "express-validator";

export const createOrderValidator = checkSchema({
    emailUser: {
        isEmail: {
            errorMessage: 'Invalid email format',
        },
        normalizeEmail: true,
    },

    subtotalAllProducts: {
        isFloat: {
            options: { min: 0 },
            errorMessage: 'Subtotal must be a positive number',
        },
    },

    products: {
        isArray: {
            errorMessage: 'Products must be an array',
        },
        custom: {
            options: (products) => {
                return products.every((product: { idProduct: any; quantity: number; priceUnity: number }) => {
                    return typeof product.idProduct === 'string' && 
                        typeof product.quantity === 'number' && 
                        typeof product.priceUnity === 'number';
                });
            },
            errorMessage: 'Each product must have valid idProduct (string), quantity, and priceUnity (number)',
        },
    },
    
}, ["body"]);


export const getOrderValidator = checkSchema({
    emailUser: {
        isEmail: {
            errorMessage: 'Invalid email format',
        },
        notEmpty:{
            errorMessage: 'Email cannot be empty'
        },
        normalizeEmail: true,
    },
}, ["body"]);


export const changeStatusValidator = checkSchema({
    orderId: {
        notEmpty: {
            errorMessage: 'ID cannot be empty',
        },
        isUUID: {
            errorMessage: 'ID must be a valid',
        },
    },

    status: {
        isIn: {
            options: [['pending', 'sent', 'delivered']],
            errorMessage: 'Status must be pending, sent or delivered',
        },
    },
}, ["body"]);
