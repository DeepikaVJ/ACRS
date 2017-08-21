package com.cdk.acrs.dao;

import com.cdk.acrs.model.Appointment;
import com.cdk.acrs.model.ServiceMenu;
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
    public Collection<ServiceStatus> readStatus(String appointmentId, String serviceId) {
        return (entityManager.createQuery("from ServiceStatus where serviceId=" + "'" + serviceId + "'" + " and appointmentId = " + "'"+appointmentId+"'")).getResultList();
    }


    @Transactional
    public int save(ServiceStatusDTO serviceStatusDTO) {
        Appointment appointment = (Appointment)(entityManager.createQuery("from Appointment where appointmentId = " + "'" + serviceStatusDTO.getAppointmentId()+"'").getSingleResult());
        ServiceMenu serviceMenu = (ServiceMenu) entityManager.createQuery("from ServiceMenu where serviceId = " + "'" + serviceStatusDTO.getServiceId()+"'").getSingleResult();
        ServiceStatus serviceStatus = new ServiceStatus(appointment, serviceMenu, serviceStatusDTO.getStatus());
        entityManager.persist(serviceStatus);
        return serviceStatus.getStatusId();
    }

    @Transactional
    public int modifyStatus(Integer appointmentId, Integer serviceId, Integer status) {
        Query query = entityManager.createQuery("update ServiceStatus set status = " + "'" + status + "'" + "where serviceId = " + "'" + serviceId + "'" + " and appointmentId =" + "'" +appointmentId + "'");
        int result = query.executeUpdate();
        return result;
    }


    public List<ServiceStatus> readAllServices() {
        List serviceStatusList = (entityManager.createQuery("from ServiceStatus")).getResultList();
        return serviceStatusList;
    }
}