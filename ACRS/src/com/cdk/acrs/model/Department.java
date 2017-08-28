package com.cdk.acrs.model;

import javax.persistence.*;

@Entity
@Table(name = "departments")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int departmentId;

    @Column(nullable = false,length = 20)
    String name;

    @Column(nullable = false,length = 20)
    int numberOfTechnicians;

    public int getNumberOfTechnicians() {
        return numberOfTechnicians;
    }

    public void setNumberOfTechnicians(int numberOfTechnicians) {
        this.numberOfTechnicians = numberOfTechnicians;
    }

    public Department() {
    }

    public Department(String name, int numberOfTechnicians) {
        this.name = name;
        this.numberOfTechnicians = numberOfTechnicians;
    }

    public Department(int departmentId, String name, int numberOfTechnicians) {
        this.departmentId = departmentId;
        this.name = name;
        this.numberOfTechnicians = numberOfTechnicians;
    }

    public int getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(int departmentId) {
        this.departmentId = departmentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
