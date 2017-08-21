package com.cdk.acrs.controller;

import com.cdk.acrs.dao.CustomerDAO;
import com.cdk.acrs.model.Car;
import com.cdk.acrs.model.Customer;
import com.cdk.acrs.service.CarService;
import com.cdk.acrs.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Collection;

import static org.springframework.http.MediaType.TEXT_PLAIN_VALUE;

@RestController
public class CustomerController {

    @Autowired
    CustomerDAO customerDAO;

    @RequestMapping(value = "/customer/cid/{fieldValue}",produces = "application/json" ,method = RequestMethod.GET)
    public Customer readCustomerAsJson(@PathVariable String fieldValue){
        return customerDAO.getCustomer(fieldValue);

    }

    @RequestMapping(value = "/customer",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<Customer> readAllCustomersAsJson(){
        return customerDAO.getAllCustomers();
    }

    @RequestMapping(value = "/customer/add",consumes ="application/json" ,produces = TEXT_PLAIN_VALUE ,method = RequestMethod.POST)
    public String addCustomer(@RequestBody Customer customer){
        System.out.println(customer);
        int value = customerDAO.save(customer);
        return "Car with vin '"+value+" ' added successfully!";
    }


}
