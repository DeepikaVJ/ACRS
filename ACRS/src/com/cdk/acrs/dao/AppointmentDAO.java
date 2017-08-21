package com.cdk.acrs.dao;

import com.cdk.acrs.model.Appointment;
import com.cdk.acrs.model.Car;
import com.cdk.acrs.model.AppointmentDTO;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.Collection;
import java.util.Date;

@Repository
public class AppointmentDAO {
    @PersistenceContext
    EntityManager entityManager;

    @Transactional
    public Collection<Appointment> getAllRecords() {
        return (entityManager.createQuery("from Appointment")).getResultList();
    }

    public Appointment getRecords(Integer vinFieldValue) {
        return (Appointment) (entityManager.createQuery("from Appointment where appointmentId =" + "'" + vinFieldValue + "'")).getSingleResult();
    }

    @Transactional
    public int save(AppointmentDTO dto) {
        int vin = dto.getVin();
        System.out.println(vin);
        Car car = (Car) entityManager.createQuery("from Car where vin = " + "'" + vin + "'").getSingleResult();
        Appointment appointment = new Appointment(car, new Date(), dto.getTotalPrice(), 1);
        entityManager.persist(appointment);
        return appointment.getAppointmentId();
    }

    @Transactional
    public int modifyStatus(Integer appointmentId, Integer status) {
        Query query =  entityManager.createQuery("update Appointment set status = " + "'" + status + "'" + "where appointmentId = " + "'" + appointmentId + "'");
        int result = query.executeUpdate();
        return result;
    }

    public Double getPriceDetails(int appointmentId) {
        return (Double)(entityManager.createQuery("select totalPrice from Appointment where appointmentId = " + "'" + appointmentId + "'")).getSingleResult();
    }
}