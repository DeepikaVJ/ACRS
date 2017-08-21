package com.cdk.acrs.model;

public class ServiceStatusDTO {

    private int serviceId;
    private int appointmentId;
    private int status;

    public ServiceStatusDTO(int serviceId, int appointmentId, int status) {
        this.serviceId = serviceId;
        this.appointmentId = appointmentId;
        this.status = status;
    }

    public int getServiceId() {
        return serviceId;
    }

    public void setServiceId(int serviceId) {
        this.serviceId = serviceId;
    }

    public int getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(int appointmentId) {
        this.appointmentId = appointmentId;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}