import { Table, Column, Model, DataType, Default, PrimaryKey } from 'sequelize-typescript';

@Table({
    tableName: 'product'
})
class Product extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    id: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 50]
        }
    })
    name: string;

    @Column({
        type: DataType.STRING(4000),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 4000]
        }
    })
    description: string;

    @Column({
        type: DataType.FLOAT,
        validate: {
            min: 0,
            max: 100000
        }
    })
    price: number;

    @Column({
        type: DataType.INTEGER,
        validate: {
            min: 0
        }
    })
    stock: number;

    @Column({
        type: DataType.BLOB
    })
    img: Buffer;

}

export default Product;
