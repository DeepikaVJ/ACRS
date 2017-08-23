package com.cdk.acrs.controller;

import com.cdk.acrs.dao.AppointmentDAO;
import com.cdk.acrs.dao.ServiceStatusDAO;
import com.cdk.acrs.model.Appointment;
import com.cdk.acrs.model.AppointmentDTO;
import com.cdk.acrs.model.AppointmentRecordInputDTO;
import com.cdk.acrs.model.ServiceStatusDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

import static org.springframework.http.MediaType.TEXT_PLAIN_VALUE;

@RestController
public class AppointmentController {

    @Autowired
    AppointmentDAO appointmentDAO;

    @Autowired
    ServiceStatusDAO serviceStatusDAO;

    @RequestMapping(value = "/appointment/get/",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<Appointment> readAppointmentAsJson(){
        return appointmentDAO.getAllRecords();
    }

    @RequestMapping(value = "/appointment/get/{vinFieldValue}",produces = "application/json" ,method = RequestMethod.GET)
    public Appointment readSingleAppointmentAsJson(@PathVariable Integer vinFieldValue){
        return appointmentDAO.getRecords(vinFieldValue);
    }

    @RequestMapping(value = "/appointment/add",consumes = "application/json",produces = TEXT_PLAIN_VALUE  ,method = RequestMethod.POST)
    public String addAppointment(@RequestBody AppointmentRecordInputDTO appointmentRecordInputDTO) {
        int vin = appointmentRecordInputDTO.getVin();
        double price = appointmentRecordInputDTO.getTotalPrice();
        AppointmentDTO appointmentDTO = new AppointmentDTO(vin,price,1);
        Integer appointmentId = appointmentDAO.save(appointmentDTO);
        ServiceStatusDTO serviceStatusDTO = null;
        int size = appointmentRecordInputDTO.getSelectedServiceIds().length;
        for (int i = 0; i < size; i++) {
            serviceStatusDTO = new ServiceStatusDTO(appointmentRecordInputDTO.getSelectedServiceIds()[i],appointmentId, 1);
            int serviceStatusId = serviceStatusDAO.save(serviceStatusDTO);
        }
        return  appointmentId.toString();
    }

    @RequestMapping(value = "/appointment/{appointmentId}/update/{status}", produces = "application/json" ,method = RequestMethod.PUT)
    public int updateAppointmentStatus(@PathVariable Integer appointmentId, @PathVariable Integer status) {
        int updatedStatus = appointmentDAO.modifyStatus(appointmentId, status);
        return updatedStatus;
    }

    @RequestMapping(value = "/appointment/getPrice/{appointmentId}/", produces = "application/json" ,method = RequestMethod.GET)
    public Double getTotalPrice(@PathVariable int appointmentId){
        return appointmentDAO.getPriceDetails(appointmentId);
    }

}
