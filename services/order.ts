
import OrderModel from "../models/order";

interface OrderService {
    newOrder(customerId: number, productsIds: number[]) : void,
    getOrder(orderId: number): OrderModel | string,
    getOrders(): OrderModel[],

}

export default OrderService;