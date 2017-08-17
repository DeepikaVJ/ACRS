package com.cdk.acrs.controller;

import com.cdk.acrs.model.Customer;
import com.cdk.acrs.model.Department;
import com.cdk.acrs.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

import static org.springframework.http.MediaType.TEXT_PLAIN_VALUE;

@RestController
public class DepartmentController {

    @Autowired
    DepartmentService departmentService;

    @RequestMapping(value = "/departments", produces = "application/json", method = RequestMethod.GET)
    public Collection<Department> readAllDepartments() {
        return departmentService.readDepartments();
    }


}
