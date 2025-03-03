import { Table, Column, Model, DataType, Default, PrimaryKey } from 'sequelize-typescript';

@Table({
    tableName: 'category_product'
})
class Category_product extends Model {

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
            isIn: [['cold drinks', 'hot drinks', 'salty food', 'sweet food', 'desserts']]
        }
    })
    name: string;


}

export default Category_product;
