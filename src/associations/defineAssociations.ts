import Order from "../models/Order.model";
import Customer from "../models/Customer.model";
import Seller from "../models/Seller.model";
import Receipt_voucher from "../models/Receipt_voucher.model";
import Order_details from "../models/Order_details.model";
import Product from "../models/Product.model";
import Category_product from "../models/Category_product.model";

function defineAssociations() {

    Order.belongsTo(Customer, {
        foreignKey: 'customerId',
        as: 'customer',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    Order.hasMany(Order_details, {
        foreignKey: 'orderId',
        as: 'orderDetails',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    Order_details.belongsTo(Order, {
        foreignKey: 'orderId',
        as: 'order',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    Order_details.belongsTo(Product, {
        foreignKey: 'productId',
        as: 'product',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    Order.belongsTo(Receipt_voucher, {
        foreignKey: 'receiptVoucherId',
        as: 'receiptVoucher',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    Order.belongsTo(Seller, {
        foreignKey: 'sellerId',
        as: 'seller',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    Product.belongsTo(Category_product, {
        foreignKey: 'categoryProductId',
        as: 'category',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    
}

export default defineAssociations;