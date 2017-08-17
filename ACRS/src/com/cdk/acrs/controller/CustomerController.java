package com.cdk.acrs.controller;

import com.cdk.acrs.model.Car;
import com.cdk.acrs.model.Customer;
import com.cdk.acrs.service.CarService;
import com.cdk.acrs.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

import static org.springframework.http.MediaType.TEXT_PLAIN_VALUE;

@RestController
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @RequestMapping(value = "/customer/cid/{fieldValue}",produces = "application/json" ,method = RequestMethod.GET)
    public Customer readCustomerAsJson(@PathVariable String fieldValue){
        return customerService.readCustomer(fieldValue);
    }

    @RequestMapping(value = "/customer",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<Customer> readAllCustomersAsJson(){
        return customerService.readAllCustomers();
    }

    @RequestMapping(value = "/customer/add",consumes ="application/json" ,produces = TEXT_PLAIN_VALUE ,method = RequestMethod.POST)
    public String addCustomer(@RequestBody Customer customer){
        System.out.println(customer);
        int value = customerService.save(customer);
        return "Car with vin '"+value+" ' added successfully!";
    }


}
