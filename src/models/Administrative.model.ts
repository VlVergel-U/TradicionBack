import { Table, Column, DataType } from 'sequelize-typescript';
import User from './User.model';

@Table({
    tableName: 'administrative'
})
class Administrative extends User {

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isIn: [['owner', 'programmer', 'tester', 'technical support']]
        }
    })
    appointment: string;

}

export default Administrative;
