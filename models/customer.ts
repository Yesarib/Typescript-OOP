
class CustomerModel{
    constructor(public id:number =0, public name: string, public address: string, public email: string) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
    }
}

export default CustomerModel;