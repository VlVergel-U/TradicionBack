import { Request, Response } from "express";
import { createOrFindCategory } from "./category_product.controller";
import Product from "../models/Product.model";
import Category_product from "../models/Category_product.model";
import { Op } from "sequelize";


export const createProduct = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, description, price, stock, img, categoryName } = req.body;

        const nameTrim = name.trim().replace(/\s+/g, "");

        const productExists = await Product.findOne({ where: { name: nameTrim } });

        if (productExists) {
            return res.status(400).json({ message: "The product exists" });
        }

        const category = await createOrFindCategory(categoryName);
        
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        const product = await Product.create({ 
            name, 
            description, 
            price, 
            stock, 
            img, 
            categoryProductId: category.id
        });

        return res.status(200).json({ product });

    } catch (error) {
        if (!res.headersSent) {
            return res.status(500).json({ message: 'Error creating product', error });
        }
    }
};


export const getProduct = async (req: Request, res: Response): Promise<any> => {

    try {
        const { name } = req.params;

        const products = await Product.findAll({ 
            where: { 
                name: { [Op.like]: `%${name}%` }
            } 
        });

        if (!products.length) {
            return res.status(404).json({ message: 'No products found' });
        }

        return res.status(200).json(products);

    } catch (error) {
        if (!res.headersSent) {
        return res.status(500).json({ message: 'Error getting product ', error });
        }
    }

}

export const getAllProducts = async (req: Request, res: Response): Promise<any> => {
try {
        const products = await Product.findAll({
            include:{
                model: Category_product,
                as: 'category'
            }
        });

        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }

        return res.status(200).json(products);

    } catch (error) {
        if (!res.headersSent) {
        return res.status(500).json({ message: 'Error getting products ', error });
        }
    }
}

export const modifyProduct = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const { name, description, price, stock, img, categoryName } = req.body;

        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const category = await createOrFindCategory(categoryName);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        await product.update({
            name, 
            description, 
            price, 
            stock, 
            img, 
            categoryProductId: category.id
        });

        return res.status(200).json({ message: 'Product updated', product });

    } catch (error) {
        if (!res.headersSent) {
            return res.status(500).json({ message: 'Error updating product', error });
        }
    }
}


export const deleteProduct = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await product.destroy();

        return res.status(200).json({ message: 'Product deleted' });

    } catch (error) {

        if (!res.headersSent) {

        return res.status(500).json({ message: 'Error deleting product', error });
        
        }
    }
}

//This function is so you can mark a product as out of stock
export const stockOut = async (req: Request, res: Response): Promise<any> => {

 try {
        const { id } = req.params;

        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await product.update({
            stock: 0
        });

        return res.status(200).json({ message: 'Stock of this product out ', product });

    } catch (error) {
        if (!res.headersSent) {
            return res.status(500).json({ message: 'Error setting out of stock this product ', error });
        }
    }

}
