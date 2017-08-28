package com.cdk.acrs.dao;

import com.cdk.acrs.model.Appointment;
import com.cdk.acrs.model.Service;
import com.cdk.acrs.model.ServiceStatus;
import com.cdk.acrs.model.ServiceStatusDTO;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.Collection;
import java.util.List;

@Repository
public class ServiceStatusDAO {

    @PersistenceContext
    EntityManager entityManager;


    @Transactional
    public Collection<ServiceStatus> readStatusOfSingleService(String appointmentId, String serviceId) {
        return (entityManager.createQuery("from ServiceStatus where serviceId=" + "'" + serviceId + "'" + " and appointmentId = " + "'"+appointmentId+"'")).getResultList();
    }


    @Transactional
    public int save(ServiceStatusDTO serviceStatusDTO) {
        Appointment appointment = (Appointment)(entityManager.createQuery("from Appointment where appointmentId = " + "'" + serviceStatusDTO.getAppointmentId()+"'").getSingleResult());
        Service service = (Service) entityManager.createQuery("from Service where serviceId = " + "'" + serviceStatusDTO.getServiceId()+"'").getSingleResult();
        ServiceStatus serviceStatus = new ServiceStatus(appointment, service, serviceStatusDTO.getStatus());
        entityManager.persist(serviceStatus);
        return serviceStatus.getStatusId();
    }

    @Transactional
    public String modifyStatus(Integer appointmentId, Integer serviceId, Integer status) {
        Query query = entityManager.createQuery("update ServiceStatus set status = " + "'" + status + "'" + "where serviceId = " + "'" + serviceId + "'" + " and appointmentId =" + "'" +appointmentId + "'");
        int result = query.executeUpdate();
        return "Status Update Successful For AppointmentID "+appointmentId+"||ServiceID "+serviceId;
    }

    @Transactional
    public String modifyStatus(Integer statusID, Integer status) {
        Query query = entityManager.createQuery("update ServiceStatus set status = " + "'" + status + "'" + "where statusId = " + "'" + statusID + "'");
        int result = query.executeUpdate();
        return "Status Update Successful For statusID "+statusID;
    }


    public List<ServiceStatus> readAllServices() {
        List serviceStatusList = (entityManager.createQuery("from ServiceStatus")).getResultList();
        return serviceStatusList;
    }

    public Collection<ServiceStatus> getServiceListForAppointmentId(String appointmentId) {
        return (entityManager.createQuery("from ServiceStatus where appointmentId = " + "'"+appointmentId+"'")).getResultList();
    }
}