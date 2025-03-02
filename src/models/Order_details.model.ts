import { Table, Column, Model, DataType, Default, PrimaryKey } from 'sequelize-typescript';

@Table({
    tableName: 'order_details'
})
class Order_details extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    id: string;

    @Column({
        type: DataType.INTEGER,
        validate: {
            min: 0
        }
    })
    quantity: number;

    @Column({
        type: DataType.FLOAT,
        validate: {
            min: 0,
            max: 100000
        }
    })
    unit_price: number;

    @Column({
        type: DataType.FLOAT,
        validate: {
            min: 0,
            max: 10000000
        }
    })
    subtotal: number;
}

export default Order_details;
