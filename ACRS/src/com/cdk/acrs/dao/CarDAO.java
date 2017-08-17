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

    public Car getCar(Integer fieldValue) {
        //return (Car) (entityManager.createQuery("from Car where vin = " + "'" + fieldValue + "'")).getSingleResult();
        return entityManager.find(Car.class,fieldValue);
    }

    public Car getDetails(String fieldValue) {
        return (Car) (entityManager.createQuery("from Car,Customer where vin = " + "'" + fieldValue + "'" + "and Car.customerId = Customer.customerId")).getSingleResult();
    }
}
