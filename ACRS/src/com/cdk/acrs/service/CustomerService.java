package com.cdk.acrs.service;


import com.cdk.acrs.dao.CustomerDAO;
import com.cdk.acrs.model.Car;
import com.cdk.acrs.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

@Service
public class CustomerService {

    @Autowired
    CustomerDAO customerDAO;

    @Transactional
    public Customer readCustomer(String fieldValue) {
        return customerDAO.getCustomer(fieldValue);
    }

    public Collection<Customer> readAllCustomers() {
        return customerDAO.getAllCustomers();
    }

    public int save(Customer customer) {
        return customerDAO.save(customer);
    }


}
