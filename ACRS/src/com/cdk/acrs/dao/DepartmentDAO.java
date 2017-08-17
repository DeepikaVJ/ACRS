package com.cdk.acrs.dao;

import com.cdk.acrs.model.Department;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class DepartmentDAO {
    @PersistenceContext
    EntityManager entityManager;
    public List<Department> getDepartments() {
        return (entityManager.createQuery("from Department")).getResultList();
    }
}
