package com.cdk.acrs.service;

import com.cdk.acrs.dao.AppointmentDAO;
import com.cdk.acrs.model.Appointment;
import com.cdk.acrs.model.AppointmentDTO;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Collection;

@Service
public class AppointmentService {

    @Resource
    AppointmentDAO appointmentDAO;

    public Collection<Appointment> readAllRecords() {
        return appointmentDAO.getAllRecords();
    }

    public Appointment readRecord(Integer vinFieldValue)  {
        return appointmentDAO.getRecords(vinFieldValue);
    }

    public int add(AppointmentDTO appointmentDTO) {
        System.out.println("in service");
        return appointmentDAO.save(appointmentDTO);
    }

    public int updateStatus(Integer recordId, Integer status) {
        int updatedStatus = appointmentDAO.modifyStatus(recordId, status);
        return updatedStatus;
    }

    public Double getPrice(int appointmentId) {
        return appointmentDAO.getPriceDetails(appointmentId);
    }
}
