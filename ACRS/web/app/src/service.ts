import {Department} from "./department";

export class Service {

    serviceId: number;
    serviceName: string = "";
    price: number;
    department:Department;


    constructor(serviceId: number, serviceName: string, price: number, department: Department) {
        this.serviceId = serviceId;
        this.serviceName = serviceName;
        this.price = price;
        this.department = department;
    }
}