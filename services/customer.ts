import CustomerModel from "../models/customer";
interface CustomerService {
    addCustomer(customer: CustomerModel): void,
    deleteCustomer(customer: CustomerModel): void,
    getCustomers(): CustomerModel[],
}

export default CustomerService;