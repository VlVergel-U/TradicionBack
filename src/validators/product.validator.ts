import { checkSchema, param } from 'express-validator';

export const createProductValidator = checkSchema({
    name: {
        notEmpty: {
            errorMessage: 'Name cannot be empty',
        },
        isString: {
            errorMessage: 'Name must be a string',
        },
        isLength: {
            options: { min: 1, max: 50 },
            errorMessage: 'Name must be between 1 and 50 characters',
        },
    },
    description: {
        notEmpty: {
            errorMessage: 'Description cannot be empty',
        },
        isString: {
            errorMessage: 'Description must be a string',
        },
        isLength: {
            options: { min: 1, max: 4000 },
            errorMessage: 'Description must be between 1 and 4000 characters',
        },
    },
    price: {
        notEmpty: {
            errorMessage: 'Price cannot be empty',
        },
        isFloat: {
            options: { min: 0, max: 100000 },
            errorMessage: 'Price must be a number between 0 and 100000',
        },
    },
    stock: {
        notEmpty: {
            errorMessage: 'Stock cannot be empty',
        },
        isInt: {
            options: { min: 0 },
            errorMessage: 'Stock must be an integer greater than or equal to 0',
        },
    },
    img: {
        notEmpty: {
            errorMessage: 'Img is required',
        },
        isURL: {
            options: {
                protocols: ['http', 'https'],
                require_protocol: true,
                require_valid_protocol: true,
            },
            errorMessage: 'It must be a valid URL starting with http or https',
        },
        custom: {
            options: (value) => {
                const validExtensions = ['.png', '.jpg', '.jpeg', '.gif'];
                const maxLength = 2048;
                const hasValidExtension = validExtensions.some((ext) =>
                    value.toLowerCase().endsWith(ext)
                );
                return value.length <= maxLength && hasValidExtension;
            },
            errorMessage: 'The URL must end in .png, .jpg, .jpeg or .gif',
        },
    },

}, ['body']);

export const modifyProductValidator = checkSchema({
    id: {
        notEmpty: {
            errorMessage: 'ID cannot be empty',
        },
        isUUID: {
            errorMessage: 'ID must be a valid',
        },
    },
    name: {
        optional: true,
        isString: {
            errorMessage: 'Name must be a string',
        },
        isLength: {
            options: { min: 1, max: 50 },
            errorMessage: 'Name must be between 1 and 50 characters',
        },
    },
    description: {
        optional: true,
        isString: {
            errorMessage: 'Description must be a string',
        },
        isLength: {
            options: { min: 1, max: 4000 },
            errorMessage: 'Description must be between 1 and 4000 characters',
        },
    },
    price: {
        optional: true,
        isFloat: {
            options: { min: 0, max: 100000 },
            errorMessage: 'Price must be a number between 0 and 100000',
        },
    },
    stock: {
        optional: true,
        isInt: {
            options: { min: 0 },
            errorMessage: 'Stock must be an integer greater than or equal to 0',
        },
    },
    img: {
        notEmpty: {
            errorMessage: 'Img is required',
        },
        isURL: {
            options: {
                protocols: ['http', 'https'],
                require_protocol: true,
                require_valid_protocol: true,
            },
            errorMessage: 'It must be a valid URL starting with http or https',
        },
        custom: {
            options: (value) => {
                const validExtensions = ['.png', '.jpg', '.jpeg', '.gif'];
                const maxLength = 2048;
                const hasValidExtension = validExtensions.some((ext) =>
                    value.toLowerCase().endsWith(ext)
                );
                return value.length <= maxLength && hasValidExtension;
            },
            errorMessage: 'The URL must end in .png, .jpg, .jpeg or .gif',
        },
    },

}, ['body', 'params']);

export const getProductValidator = checkSchema({
    id: {
        notEmpty: {
            errorMessage: 'ID cannot be empty',
        },
        isUUID: {
            errorMessage: 'ID must be a valid',
        },
    },
}, ['params']);

export const outStockProductValidator = checkSchema({
    id: {
        notEmpty: {
            errorMessage: 'ID cannot be empty',
        },
        isUUID: {
            errorMessage: 'ID must be a valid',
        },
    },
}, ['params']);

export const deleteProductValidator = checkSchema({
    id: {
        notEmpty: {
            errorMessage: 'ID cannot be empty',
        },
        isUUID: {
            errorMessage: 'ID must be a valid',
        },
    },
}, ['params']);
