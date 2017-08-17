package com.cdk.acrs.model;


import javax.persistence.*;

@Entity
@Table(name = "car_detail")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int vin;

    @Column(length = 20, nullable = false)
    private String make;

    @Column(length = 20, nullable = false)
    private String model;


    @Column(nullable = false)
    private int year;

    @Column(length = 20, nullable = true)
    private String trim;

    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "customerId")
    private Customer customer;

    public Car() {
    }

    public Car(String make, String model, int year, String trim, Customer customer) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.trim = trim;
        this.customer = customer;
    }

    public Car(int vin,String make, String model, int year, String trim, Customer customer) {
        this.vin = vin;
        this.make = make;
        this.model = model;
        this.year = year;
        this.trim = trim;
        this.customer = customer;
    }


    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public int getVin() {
        return vin;
    }

    public void setVin(int vin) {
        this.vin = vin;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getTrim() {
        return trim;
    }

    public void setTrim(String trim) {
        this.trim = trim;
    }

    @Override
    public String toString() {
        return "Car{" +
                "vin=" + vin +
                ", make='" + make + '\'' +
                ", model='" + model + '\'' +
                ", year=" + year +
                ", trim='" + trim + '\'' +
                '}';
    }
}
