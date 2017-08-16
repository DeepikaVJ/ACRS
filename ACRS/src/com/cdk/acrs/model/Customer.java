package com.cdk.acrs.model;

import javax.persistence.*;

@Entity
@Table(name = "customer_detail")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int customerId;

    @Column(length = 20, nullable = false)
    private String name;

    @Column(length = 20, nullable = false)
    private String address;

    @Column(nullable = false)
    private int contact;

    public Customer() {
    }

    public Customer(String name, String address, int contact) {
        this.name = name;
        this.address = address;
        this.contact = contact;

    }

    public Customer(int customerId, String name, String address, int contact) {
        this.customerId = customerId;
        this.name = name;
        this.address = address;
        this.contact = contact;
    }

    public int getCustomerId() {

        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getContact() {
        return contact;
    }

    public void setContact(int contact) {
        this.contact = contact;
    }
}
