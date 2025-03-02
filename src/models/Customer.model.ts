import { Table, Column, Model, DataType, Default, PrimaryKey } from 'sequelize-typescript';
import User from './User.model';

@Table({
    tableName: 'customer'
})
class Customer extends User {

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isIn: [['cash payment', 'card']]
        }
    })
    payment_method: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 100]
        }
    })
    address: string;

    @Column({
        type: DataType.STRING(10),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 10]
        }
    })
    cell_phone_number: string;

}

export default Customer;
