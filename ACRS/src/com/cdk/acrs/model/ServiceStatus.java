package com.cdk.acrs.model;

import javax.persistence.*;

@Entity
@Table(name = "service_status")
public class ServiceStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int statusId;


    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JoinColumn(name = "appointmentId")
    Appointment appointment;

    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JoinColumn(name = "serviceId")
    Service service;

    @Column
    int status;

    public ServiceStatus() {
    }

    public ServiceStatus(Appointment appointment, Service service, int status) {
        this.appointment = appointment;
        this.service = service;
        this.status = status;
    }

    public ServiceStatus(int statusId, Appointment appointment, Service service, int status) {
        this.statusId = statusId;
        this.appointment = appointment;
        this.service = service;
        this.status = status;
    }

    public int getStatusId() {
        return statusId;
    }

    public void setStatusId(int statusId) {
        this.statusId = statusId;
    }

    public Appointment getAppointment() {
        return appointment;
    }

    public void setAppointment(Appointment appointment) {
        this.appointment = appointment;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

}
