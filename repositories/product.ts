import ProductModel from "../models/product";
import ProductService from "../services/product";

class Product implements ProductService {
    private productList: ProductModel[] = [];

    addProduct(product: ProductModel): void {
        const newProduct = new ProductModel(this.productList.length,product.name,product.price,product.stock)
        this.productList.push(newProduct);    
    }
    deleteProduct(productId: number): void {
        const productIndex = this.productList.findIndex(product => product.id === productId);

        if (productIndex !== -1) {
            this.productList.splice(productIndex, 1);
        }
    }
    getProducts(): ProductModel[] {
        return this.productList        
    }
    getProduct(productId: number): ProductModel | string{
        const product = this.productList.find(product => product.id === productId);
        if (!product) {
            return "There is no product with this id"
        }
        return product;        
    }
}

export default Product;