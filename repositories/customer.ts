import CustomerModel from "../models/customer";
import CustomerService from "../services/customer";

class Customer implements CustomerService {
    private customerList: CustomerModel[] = [];
    
    addCustomer(customer: CustomerModel): void {
        const newCustomer = new CustomerModel(this.customerList.length,customer.name,customer.address,customer.email);
        
        this.customerList.push(newCustomer);
    }
    deleteCustomer(customer: CustomerModel): void {
        this.customerList = this.customerList.filter(cust => cust !== customer);
    }

    getCustomers(): CustomerModel[] {
        return this.customerList;
    }
}

export default Customer;