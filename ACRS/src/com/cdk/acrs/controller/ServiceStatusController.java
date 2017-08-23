package com.cdk.acrs.controller;

import com.cdk.acrs.dao.ServiceStatusDAO;
import com.cdk.acrs.model.ServiceStatus;
import com.cdk.acrs.model.ServiceStatusDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class ServiceStatusController {

    @Autowired
    ServiceStatusDAO serviceStatusDAO;

    @RequestMapping(value = "/status/appointment/{appointmentId}/service/{serviceId}", produces = "application/json", method = RequestMethod.GET)
    public Collection<ServiceStatus> getStatusOfSingleService(@PathVariable String appointmentId, @PathVariable String serviceId) {
        return serviceStatusDAO.readStatusOfSingleService(appointmentId, serviceId);
    }

    @RequestMapping(value = "/status/appointment/{appointmentId}", produces = "application/json", method = RequestMethod.GET)
    public Collection<ServiceStatus> getStatus(@PathVariable String appointmentId) {
        return serviceStatusDAO.readStatus(appointmentId);
    }

    @RequestMapping(value = "/allstatus", produces = "application/json", method = RequestMethod.GET)
    public Collection<ServiceStatus> getAllServices() {
        return serviceStatusDAO.readAllServices();
    }

    @RequestMapping(value = "/status/add", produces = "application/json", consumes = "application/json", method = RequestMethod.POST)
    public int addService(@RequestBody ServiceStatusDTO serviceStatusDTO) {
        int value = serviceStatusDAO.save(serviceStatusDTO);
        return value;
    }

    @RequestMapping(value = "/appointment/{appointmentId}/service/{serviceId}/update/{status}", produces = "text/plain" ,method = RequestMethod.PUT)
    public String updateServiceStatus(@PathVariable Integer appointmentId, @PathVariable Integer serviceId, @PathVariable Integer status) {
        int updatedStatus = serviceStatusDAO.modifyStatus(appointmentId, serviceId, status);
        return updatedStatus + "";
    }
}