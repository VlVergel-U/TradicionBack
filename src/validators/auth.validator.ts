import { checkSchema } from "express-validator";

export const loginValidator = checkSchema({

    email: {
        isEmail: {
            errorMessage: 'Invalid email'
        },
        normalizeEmail: true

    },

    password: {
        isLength: {
            options: { max: 12 },
            errorMessage: 'Password must be in 12 characters'
        }
    },


}, ["body"]);

export const registerValidator = checkSchema({
    
    first_name: {
        notEmpty: {
            errorMessage: 'First name cannot be null'
        }
    },
    second_name: {
        optional: true,
        isString: {
            errorMessage: 'Second name must be a string'
        }
    },
    first_last_name: {
        notEmpty: {
            errorMessage: 'First last name cannot be null'
        }
    },
    second_last_name: {
        notEmpty: {
            errorMessage: 'Second last name cannot be null'
        }
    },
    identification: {
        notEmpty: {
            errorMessage: 'Identification cannot be null'
        }
    },
    email: {
        notEmpty: {
            errorMessage: 'Email cannot be null'
        },
        isEmail: {
            errorMessage: 'Email must be valid'
        }
    },
    password: {
        isLength: {
            options: { max: 100 },
        }
    },

    address: {
        notEmpty: {
            errorMessage: 'Address cannot be null'
        },
        isString: {
            errorMessage: 'Address must be a string'
        },
        isLength: {
            options: { max: 100 },
            errorMessage: 'Address must be less than 100 characters'
        }
    },

    payment_method: {
        notEmpty: {
            errorMessage: 'Payment method cannot be null'
        },
        isIn: {
            options: [['cash_payment', 'card']],
            errorMessage: 'Payment method must be either cash payment or card'
        }
    },

    cell_phone_number: {
        notEmpty: {
            errorMessage: 'Cell phone number cannot be null'
        },
        matches: {
            options: /^[0-9]+$/,
            errorMessage: 'The cell phone must be a number'
        }
    }
}, ["body"]);