package com.cdk.acrs.dao;

import com.cdk.acrs.model.Customer;
import com.cdk.acrs.model.Department;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;

//@Repository
public class DepartmentDAO {

    @PersistenceContext
    EntityManager entityManager;

    public Collection<Department> getAllCustomers() {
        return (entityManager.createQuery("from Department")).getResultList();
    }


    public int save(Department department) {
        entityManager.persist(department);
        return department.getDepartmentId();

    }

    public Collection<Department> getDepartment(int fieldValue) {
        System.out.println("Dao" + fieldValue);
        return (entityManager.createQuery("from Customer where customerId  = "+"'"+fieldValue+"'")).getResultList();
    }
}
