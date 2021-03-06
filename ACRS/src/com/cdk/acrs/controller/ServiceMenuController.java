package com.cdk.acrs.controller;

import com.cdk.acrs.dao.ServiceMenuDAO;
import com.cdk.acrs.model.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
@RestController
public class ServiceMenuController {
    @Autowired
    ServiceMenuDAO serviceMenuDao;

    @RequestMapping(value = "/department/{departmentId}/serviceMenu", produces = "application/json", method = RequestMethod.GET)
    public Collection<Service> readAllDepartments(@PathVariable Integer departmentId) {
        return serviceMenuDao.readServices(departmentId);
    }

}
