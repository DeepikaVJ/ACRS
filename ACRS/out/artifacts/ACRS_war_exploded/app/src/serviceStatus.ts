import {Service} from "./service";

export class ServiceStatus {

    statusId: number;
    status: number;
    appointmentId: number;
    serviceId: number;
    serviceMenu:Service;


    constructor(statusId: number, status: number, appointmentId: number, serviceId: number, serviceMenu: Service) {
        this.statusId = statusId;
        this.status = status;
        this.appointmentId = appointmentId;
        this.serviceId = serviceId;
        this.serviceMenu = serviceMenu;
    }
}