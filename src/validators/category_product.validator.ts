import { checkSchema } from 'express-validator';

export const createCategoryProductValidator = checkSchema({
    name: {
        notEmpty: {
            errorMessage: 'Name cannot be empty',
        },
        isString: {
            errorMessage: 'Name must be a string',
        },
        isIn: {
            options: [['furniture', 'kitchenware', 'bedding', 'storage', 'decoration']],
            errorMessage: 'Invalid category name',
        },
    },
}, ['body']);

export const modifyCategoryProductValidator = checkSchema({
    name: {
        optional: true,
        isString: {
            errorMessage: 'Name must be a string',
        },
        isIn: {
            options: [['furniture', 'kitchenware', 'bedding', 'storage', 'decoration']],
            errorMessage: 'Invalid category name',
        },
    },
}, ['body']);

export const getCategoryProductValidator = checkSchema({
    id: {
        notEmpty: {
            errorMessage: 'ID cannot be empty',
        },
        isUUID: {
            errorMessage: 'ID must be a valid',
        },
    },
}, ['params']);

export const deleteCategoryProductValidator = checkSchema({
    id: {
        notEmpty: {
            errorMessage: 'ID cannot be empty',
        },
        isUUID: {
            errorMessage: 'ID must be a valid',
        },
    },
}, ['params']);