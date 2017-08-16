package com.cdk.acrs.dao;

import com.cdk.acrs.model.Car;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;

@Repository
public class CarDAO {

    @PersistenceContext
    EntityManager entityManager;

    public Collection<Car> getAllCars() {
        return (entityManager.createQuery("from Car")).getResultList();
    }


    public int save(Car car) {
        entityManager.persist(car);
        return car.getVin();

    }

    public Collection<Car> getCars(String fieldValue) {
        return (entityManager.createQuery("from Car where vin = "+"'"+fieldValue+"'")).getResultList();
    }
}
