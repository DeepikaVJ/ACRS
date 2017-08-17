package com.cdk.acrs.service;

import com.cdk.acrs.dao.CarDAO;
import com.cdk.acrs.model.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

@Service
public class CarService {

    @Autowired
    CarDAO carDAO;

    @Transactional
    public Collection<Car> readAllCars() {
        return carDAO.getAllCars();
    }

    @Transactional
    public int save(Car car){
        return carDAO.save(car);
    }

    public Car readCar( Integer fieldValue) {
        return carDAO.getCar(fieldValue);
    }

    public Car readDetails(String vinFieldValue) {
        return carDAO.getDetails(vinFieldValue);
    }
}
