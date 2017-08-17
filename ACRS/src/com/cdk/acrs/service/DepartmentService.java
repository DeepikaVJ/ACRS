package com.cdk.acrs.service;

import com.cdk.acrs.dao.DepartmentDAO;
import com.cdk.acrs.model.Customer;
import com.cdk.acrs.model.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

@Service
public class DepartmentService {
    @Autowired
    DepartmentDAO departmentDAO;

    @Transactional
    public Collection<Department> readDepartments() {
        return departmentDAO.getDepartments();
    }
}
