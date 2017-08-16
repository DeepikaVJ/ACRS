package com.cdk.acrs.model;

public class Department {
    int departmentId;
    String name;
    int numberOftechnicians;

    public Department() {
    }

    public Department(String name, int numberOftechnicians) {

        this.name = name;
        this.numberOftechnicians = numberOftechnicians;
    }

    public Department(int departmentId, String name, int numberOftechnicians) {

        this.departmentId = departmentId;
        this.name = name;
        this.numberOftechnicians = numberOftechnicians;
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

    public int getNumberOftechnicians() {
        return numberOftechnicians;
    }

    public void setNumberOftechnicians(int numberOftechnicians) {
        this.numberOftechnicians = numberOftechnicians;
    }
}
