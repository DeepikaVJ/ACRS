export class Service {

    serviceId: number;
    serviceName: string = "";
    price: number;

    constructor(serviceId: number, serviceName: string, price: number) {
        this.serviceId = serviceId;
        this.serviceName = serviceName;
        this.price = price;
    }


}