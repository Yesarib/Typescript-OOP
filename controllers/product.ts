import { RequestHandler } from "express";
import ProductInterface from "../interfaces/product";
import ProductModel from "../models/product";
import Product from "../repositories/product";

const product: Product = new Product();

export const addProduct:RequestHandler<unknown,unknown,ProductInterface,unknown> = async(req,res,next) => {
    console.log(req.body);
    
    try {
        
        const { name, price, stock } = req.body;
        const newProduct: ProductModel = new ProductModel(undefined,name,price,stock);

        product.addProduct(newProduct);
        res.status(201).json({message: "success", newProduct})
    } catch (error) {
        next(error)
    }
}

export const deleteProduct:RequestHandler = async(req,res,next) => {
    try {
        const productId = parseInt(req.params.productId);
        product.deleteProduct(productId);
        res.status(204);
    } catch (error) {
        next(error)
    }
}

export const getProduct:RequestHandler = async(req,res,next) => {
    try {
        const { productId } = req.body
        const thisProduct = product.getProduct(productId);
        res.status(200).json(thisProduct);
    } catch (error) {
        next(error)
    }
}

export const getProducts:RequestHandler = async(req,res,next) => {
    try {
        const products = product.getProducts();
        res.status(200).json(products);

    } catch (error) {
        next(error)
    }
}