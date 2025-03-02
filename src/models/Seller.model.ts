import { Column, DataType, Table } from 'sequelize-typescript';
import User from './User.model';

@Table({
    tableName: 'seller'
})
class Seller extends User {

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isIn: [['cashier']]
        }
    })
    appointment: string;
    
}

export default Seller;
