import CategoryProduct from "../models/Category_product.model";
import { Request, Response } from "express";

export const createOrFindCategory = async (name: string) => {
    try {
        const nameInLowercase = name.toLowerCase();
        const [category, created] = await CategoryProduct.findOrCreate({
            where: { name: nameInLowercase },
            defaults: { name: nameInLowercase }
        });
        console.log(created ? 'Category created' : 'Category exists', category);

        return category;

    } catch (error) {

        console.error(`Error creating category ${error.message}`);
    }
}

export const deleteCategory = async (req: Request, res: Response): Promise<any> => {

    const {name} = req.body

    try {
        const result = await CategoryProduct.destroy({ where: { name } });
        if (result > 0) {
            console.log('Category deleted');
            return true;
        } else {
            console.log('No category found');
            return false;
        }
    } catch (error) {
        console.error(`Error deleting category ${error.message}`);
    }
}

export const getAllCategories = async (req: Request, res: Response): Promise<any> => {
    try{
        const categories = await CategoryProduct.findAll()

        if (categories.length === 0) {
            return res.status(404).json({ message: 'No categories found' });
        }
        
        return res.status(200).json({categories})

    }catch(error){

        if (!res.headersSent) {
        return res.status(500).json({ error: "Error getting categories" });
        }
    }
}