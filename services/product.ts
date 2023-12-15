import ProductModel from "../models/product";

interface ProductService {
    addProduct(product: ProductModel): void,
    deleteProduct(productId: number): void,
    getProducts(): ProductModel[],
    getProduct(productId:number): ProductModel | string
}

export default ProductService;