import { Sequelize } from "sequelize-typescript";
import config from "./config";
import Order from "../models/Order.model";
import Customer from "../models/Customer.model";
import Seller from "../models/Seller.model";
import Receipt_voucher from "../models/Receipt_voucher.model";
import Order_details from "../models/Order_details.model";
import Product from "../models/Product.model";
import Category_product from "../models/Category_product.model";
import Administrative from "../models/Administrative.model";
import User from "../models/User.model";

const db = new Sequelize(config.dbConfig.url, {
    dialect: 'mysql',
    models: [Order, Customer, Seller, Receipt_voucher, Order_details, Product, Category_product, Administrative, User]
});

export default db;
