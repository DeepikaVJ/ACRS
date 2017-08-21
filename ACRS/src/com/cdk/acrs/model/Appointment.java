package com.cdk.acrs.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int appointmentId;

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE,CascadeType.REMOVE},fetch = FetchType.EAGER)
    @JoinColumn(name = "vin")
    private Car car;

    @Column
    private Date date;

    @Column(nullable = false)
    private double totalPrice;


    @Column
    private int status;

    public Appointment() {
    }
    public Appointment(int appointmentId, Car car, Date date, double totalPrice, int status) {
        this.appointmentId = appointmentId;
        this.car = car;
        this.date = date;
        this.totalPrice = totalPrice;
        this.status = status;
    }

    public Appointment(Car car, Date date, double totalPrice, int status) {
        this.car = car;
        this.date = date;
        this.totalPrice = totalPrice;
        this.status = status;
    }

    public int getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(int appointmentId) {
        this.appointmentId = appointmentId;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}