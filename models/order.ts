
class OrderModel {
    constructor(public id:number= 0, public customerId: number , public productsIds: number[]) {
        this.id = id;
        this.customerId = customerId;
        this.productsIds = productsIds
    }
}

export default OrderModel;