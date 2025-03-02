import { checkSchema } from "express-validator";

export const createUserValidator = checkSchema({
    
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
    role: {
        isIn: {
            options: [['administrative', 'seller', 'customer']],
            errorMessage: 'Role must be one of administrative, seller, customer'
        }
    },
    payment_method: {
        in: ["body"],
        custom: {
          options: (value, { req }) => {
            if (req.body.role === 'client' && !value) {
              throw new Error('Payment method cannot be null');
            }
            return true;
          },
        },
        isIn: {
          options: [['cash_payment', 'card']],
          errorMessage: "Payment method must be either 'cash_payment' or 'card'",
        },
      },
      address: {
        in: ["body"],
        custom: {
          options: (value, { req }) => {
            if (req.body.role === 'client' && !value) {
              throw new Error('Address cannot be null');
            }
            return true;
          },
        },
      },
      cell_phone_number: {
        in: ["body"],
        custom: {
          options: (value, { req }) => {
            if (req.body.role === 'client' && !value) {
              throw new Error('Cell phone number cannot be null');
            }
            return true;
          },
        },
    },
    appointment: {
        in: ["body"],
        custom: {
          options: (value, { req }) => {
            if (req.body.role === 'seller') {
              if (!value) {
                throw new Error('Appointment cannot be null for sellers');
              }
              if (!['cashier', 'waiter'].includes(value)) {
                throw new Error("Appointment must be either 'cashier' or 'waiter'");
              }
            }
            if (req.body.role === 'administrative') {
                if (!value) {
                  throw new Error('Appointment cannot be null for administrative roles');
                }
                if (!['owner', 'programmer', 'tester', 'technical support'].includes(value)) {
                  throw new Error("Appointment must be one of: 'owner', 'programmer', 'tester', 'technical support'");
                }
              }
            return true;
          },
        },
    },
}, ["body"]);

export const getUserValidator = checkSchema({
    identification: {
        matches: {
            options: /^[0-9]+$/,
            errorMessage: 'The identification number must be a number'
        }
    }
}, ["body"]);

export const deleteUserValidator = checkSchema({
    identification: {
        matches: {
            options: /^[0-9]+$/,
            errorMessage: 'The identification number must be a number'
        }
    }
}, ["body"]);

export const modifyUserValidator = checkSchema({
    
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
        matches: {
            options: /^[0-9]+$/,
            errorMessage: 'The identification number must be a number'
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
    
    role: {
        isIn: {
            options: [['administrative', 'seller', 'customer']],
            errorMessage: 'Role must be one of administrative, seller, customer'
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