export class Customer {


    customerId: number;
    name: string='';
    address: string='';
    contact: number;

    constructor(customerId: number,name: string, address: string, contact: number) {
       this.customerId = customerId;
        this.name = name;
        this.address = address;
        this.contact = contact;
    }

}