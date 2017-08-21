package com.cdk.acrs.controller;

import com.cdk.acrs.dao.CarDAO;
import com.cdk.acrs.model.Car;
import com.cdk.acrs.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

import static org.springframework.http.MediaType.TEXT_PLAIN_VALUE;

@RestController
public class CarController {

    @Autowired
    CarDAO carDAO;

    @RequestMapping(value = "/car/vin/{vinFieldValue}",produces = "application/json" ,method = RequestMethod.GET)
    public Car readCarAsJson(@PathVariable Integer vinFieldValue){
        return carDAO.getCar(vinFieldValue);
    }

    @RequestMapping(value = "/cars",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<Car> readAllCarsAsJson(){
        return carDAO.getAllCars();
    }

    @RequestMapping(value = "/car/add",consumes ="application/json" ,produces = TEXT_PLAIN_VALUE ,method = RequestMethod.POST)
    public String addCar(@RequestBody Car car){
        System.out.println(car);
        int value = carDAO.save(car);
        return "Car with vin '"+value+" ' added successfully!";
    }
}
