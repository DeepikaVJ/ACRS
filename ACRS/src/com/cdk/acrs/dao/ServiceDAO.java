package com.cdk.acrs.dao;

import com.cdk.acrs.model.Service;
import com.sun.org.apache.regexp.internal.RE;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;

@Repository
public class ServiceDAO {

@PersistenceContext
    EntityManager entityManager;
@Transactional
    public Collection<Service> readServices(Integer departmentId) {
        return (entityManager.createQuery("from Service where departmentId="+"'"+departmentId+"'")).getResultList();
    }
}
