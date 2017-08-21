package com.cdk.acrs.dao;

import com.cdk.acrs.model.ServiceMenu;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;

@Repository
public class ServiceMenuDAO {

    @PersistenceContext
    EntityManager entityManager;

    @Transactional
    public Collection<ServiceMenu> readServices(Integer departmentId) {
        return (entityManager.createQuery("from ServiceMenu where =" + "'" + departmentId + "'")).getResultList();
    }
}
