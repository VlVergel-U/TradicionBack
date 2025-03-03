import { Request, Response } from "express";
import Customer from "../models/Customer.model";
import Seller from "../models/Seller.model";
import Receipt_voucher from "../models/Receipt_voucher.model";
import Order from "../models/Order.model";
import Order_details from "../models/Order_details.model";
import Product from "../models/Product.model";
import { Sequelize } from "sequelize";


export const createOrder = async (req: Request, res: Response): Promise<any> => {

    try {
        const{emailUser, subtotalAllProducts, products} =req.body

        let user = await Customer.findOne({ where: { email:emailUser } });

        for (const product of products) {

            const dbProduct = await Product.findOne({ where: { id: product.idProduct } });

            if (!dbProduct || dbProduct.stock == 0) {
                return res.status(400).json({ success: false, message: `This product is not available ${dbProduct?.name || 'Product not found'}` });
            }
        }

        const newOrder = await Order.create({
            total_price:subtotalAllProducts,
            status:"pending",
            date: Date.now(),
            customerId:user.id
        })

        const orderDetails = products.map((product: { idProduct: any; quantity: number; priceUnity: number; }) => ({
            orderId: newOrder.id,
            productId: product.idProduct,
            quantity: product.quantity,
            unit_price: product.priceUnity,
            subtotal: (product.priceUnity * product.quantity)
        }));
        
        await Order_details.bulkCreate(orderDetails);


        //this part of code is functional if your business is for example a supermarket

        // for (const product of products) {
        //     await Product.update(
        //         { stock: Sequelize.literal(`stock - ${product.quantity}`) },
        //         { where: { id: product.idProduct } }
        //     );
        // }

        return res.status(200).json({ success: true, message: 'Order created'})


    } catch (error) {
        if (!res.headersSent) {
        return res.status(500).json({ error: 'Error creating order ' + error });
        }
    }
}

export const getOrder = async (req: Request, res: Response): Promise<any> => {
    try {
        const { emailUser } = req.body;

        const user = await Customer.findOne({ where: { email:emailUser } });

        if (!user) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        const orders = await Order.findAll({
            where: { customerId: user.id },
            include: [
                {
                    model: Order_details,
                    as: "orderDetails",
                    include: [
                        {
                            model: Product,
                            as: "product",
                        },
                    ],
                },
            ],
        });

        if (orders.length === 0) {
            return res.status(404).json({ message: 'No orders found for this customer' });
        }

        return res.status(200).json({ success: true, orders });

    } catch (error) {
        if (!res.headersSent) {
            return res.status(500).json({ error: 'Error getting order' });
        }
    }
}

export const getAllOrders = async (req: Request, res: Response): Promise<any> => {

    try{

        const orders = await Order.findAll({
            include:{
                model: Order_details,
                as: "orderDetails",
            }
        });

        if (orders.length === 0) {
            return res.status(404).json({ message: 'No orders found' });
        }

        return res.status(200).json({ success: true, message: 'Order created'})


    } catch (error) {
        if (!res.headersSent) {
        return res.status(500).json({ error: 'Error getting orders' });
        }
    }
}

export const changeStatus = async (req: Request, res: Response): Promise<any> => {
    try {
        const { orderId, status } = req.body;

        const order = await Order.findOne({ where: { id: orderId } });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        order.status = status;
        await order.save();

        return res.status(200).json({ success: true, message: 'Order status updated' });

    } catch (error) {
        if (!res.headersSent) {
            return res.status(500).json({ error: 'Error changing order status' });
        }
    }
}