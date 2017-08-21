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
    ServiceMenu serviceMenu;

    @Column
    int status;

    public ServiceStatus() {
    }

    public ServiceStatus(Appointment appointment, ServiceMenu serviceMenu, int status) {
        this.appointment = appointment;
        this.serviceMenu = serviceMenu;
        this.status = status;
    }

    public ServiceStatus(int statusId, Appointment appointment, ServiceMenu serviceMenu, int status) {
        this.statusId = statusId;
        this.appointment = appointment;
        this.serviceMenu = serviceMenu;
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

    public ServiceMenu getServiceMenu() {
        return serviceMenu;
    }

    public void setServiceMenu(ServiceMenu serviceMenu) {
        this.serviceMenu = serviceMenu;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

}
