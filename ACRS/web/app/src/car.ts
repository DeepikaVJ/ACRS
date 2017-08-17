import {Customer} from "./customer";

export class Car {


    vin: number;
    make: string = "";
    model: string = "";
    year: string = "";
    trim: string = "";
    customer: Customer;

    constructor(make: string, model: string, year: string, trim: string, customer: Customer) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.trim = trim;
        this.customer = customer;
    }

}