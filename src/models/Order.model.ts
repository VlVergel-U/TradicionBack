import { Table, Column, Model, DataType, Default, PrimaryKey } from 'sequelize-typescript';

@Table({
    tableName: 'order'
})
class Order extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    id: string;

    @Column({
        type: DataType.FLOAT,
        validate: {
            min: 0,
            max: 50000000
        }
    })
    total_price: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            isIn: [['pending', 'sent', 'delivered']]
        }
    })
    status: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    date: Date;
}

export default Order;
