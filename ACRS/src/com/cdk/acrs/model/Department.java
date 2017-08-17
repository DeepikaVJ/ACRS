package com.cdk.acrs.model;
import javax.persistence.*;

@Entity
@Table(name = "departments")
public class Department {
    @Id
            @GeneratedValue(strategy = GenerationType.)
    int departmentId;
    String name;
    int numberOfTechnicians;

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

    public int getNumberOftechnicians() {
        return numberOfTechnicians;
    }

    public void setNumberOftechnicians(int numberOfTechnicians) {
        this.numberOfTechnicians = numberOfTechnicians;
    }
}
