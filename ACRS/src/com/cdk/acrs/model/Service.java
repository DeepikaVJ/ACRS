package com.cdk.acrs.model;

import javax.persistence.*;

@Entity
@Table(name = "servicemenu")
public class Service {
    public Service() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int serviceId;

    @Column(nullable = false, length = 20)
    String serviceName;

    @Column(nullable = false)
    double price;

    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JoinColumn(name = "departmentId")
    Department department;

    public Service(String serviceName, double price, Department department) {
        this.serviceName = serviceName;
        this.price = price;
        this.department = department;
    }

    public Service(int serviceId, String serviceName, double price, Department department) {
        this.serviceId = serviceId;
        this.serviceName = serviceName;
        this.price = price;
        this.department = department;
    }

    public int getServiceId() {
        return serviceId;
    }

    public void setServiceId(int serviceId) {
        this.serviceId = serviceId;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }


}
