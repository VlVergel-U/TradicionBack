import { Table, Column, Model, DataType, Default, PrimaryKey } from 'sequelize-typescript';

@Table({
    tableName: 'user'
})
class User extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    id: string;

    @Column({
        type: DataType.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 20]
        }
    })
    first_name: string;

    @Default('')
    @Column({
        type: DataType.STRING(20),
    })
    second_name: string;

    @Column({
        type: DataType.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 20]
        }
    })
    first_last_name: string;

    @Column({
        type: DataType.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 20]
        }
    })
    second_last_name: string;

    @Column({
        type: DataType.STRING(10),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 10]
        }
    })
    identification: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 50]
        }
    })
    email: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 100]
        }
    })
    password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            isIn: [['administrative', 'seller', 'customer']]
        }
    })
    role: string;

}

export default User;
