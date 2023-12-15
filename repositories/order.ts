
import OrderModel from "../models/order";
import OrderService from "../services/order";

class Order implements OrderService {
    private orderList: OrderModel[] = [];


    newOrder(customerId: number ,productsIds: number[]): void {
        const newOrder = new OrderModel(this.orderList.length, customerId, productsIds);
        this.orderList.push(newOrder);
    }
    getOrder(orderId: number): OrderModel | string {
        const order = this.orderList.find(order => order.id === orderId);
        if (!order) {
            return "There is no order with this id"
        } 
        return order;
    }
    getOrders(): OrderModel[] {
        return this.orderList;
    }

}

export default Order;