import {Service} from "./service";

export class ServiceStatus {

    statusId: number;
    status: number;
    appointmentId: number;
    service:Service;


    constructor(statusId: number, status: number, appointmentId: number, service: Service) {
        this.statusId = statusId;
        this.status = status;
        this.appointmentId = appointmentId;
        this.service = service;
    }
}