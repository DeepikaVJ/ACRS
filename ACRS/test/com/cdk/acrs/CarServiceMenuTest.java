package com.cdk.acrs;

import com.cdk.acrs.dao.CarDAO;
import com.cdk.acrs.model.Car;
import com.cdk.acrs.model.Customer;
import com.cdk.acrs.service.CarService;
import org.hamcrest.CoreMatchers;
import org.junit.Assert;
import org.junit.Test;
import org.mockito.Matchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

//@RunWith(SpringRunner.class)
//@ContextConfiguration({
//         "file:web/WEB-INF/dispatcher-servlet.xml"
//         })
public class CarServiceMenuTest {
    //    @Autowired
    CarService service =new CarService();

    @Test
    public void testService() {
        Customer rajan = new Customer("Rajan", "Pune", 100);
        Car car1 = new Car(1000, "Maruti", "Alto", 2017, "LXi", rajan);


        CarDAO mock = Mockito.mock(CarDAO.class);
        Mockito.when(mock.getCar(Matchers.anyInt())).thenReturn(car1);
        service.setCarDAO(mock);

        Car car = service.readCar(2000);
        Assert.assertEquals(car, car1);
    }

}
