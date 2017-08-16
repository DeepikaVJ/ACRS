export class Car {


    vin: number;
    make: string = "";
    model: string = "";
    year: string = "";
    trim: string = "";
    customerID: number;

    constructor(make: string, model: string, trim: string, year: string,  customerID: number) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.trim = trim;
        this.customerID = customerID;
    }

}