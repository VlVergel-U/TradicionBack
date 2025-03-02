import { Table, Column, Model, DataType, Default, PrimaryKey } from 'sequelize-typescript';

@Table({
    tableName: 'receipt_voucher'
})
class Receipt_voucher extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            isIn: [['accepted', 'rejected']]
        }
    })
    status: string;
}

export default Receipt_voucher;
