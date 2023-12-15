
class ProductModel {
    constructor(public id: number=0, public name:string, public price: number, public stock: number ) {
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
    }
}

export default ProductModel;