package com.cdk.acrs.dao;

import com.cdk.acrs.model.Car;
import com.cdk.acrs.model.Customer;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;

@Repository
public class CustomerDAO {

    @PersistenceContext
    EntityManager entityManager;

    public Collection<Customer> getAllCustomers() {
        return (entityManager.createQuery("from Customer")).getResultList();
    }


    public int save(Customer customer) {
        entityManager.persist(customer);
        return customer.getCustomerId();

    }

    public Customer getCustomer(String fieldValue) {
        return (Customer) (entityManager.createQuery("from Customer where customerId="+"'"+fieldValue+"'")).getSingleResult();
    }
}
