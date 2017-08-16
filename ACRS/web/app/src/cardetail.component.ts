import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

import {Car} from "./car";
import {Customer} from "./customer";

@Component({
    selector: 'acrs-app',
    templateUrl: '../partials/cardetail.component.html',
    //styleUrls: ['../css/car.component.styles.css'],
})
export class CarDetailComponent {

    title: string = "Customer-Car Detail Form";
    car: Car;
    customer: Customer;
    // imageUrl:string ="images/";
    vinSearchFieldValue: string = "";


    constructor(private http: Http) {
        // this.car = new Car('Audi','A4','2017','VT','audi-a4.png');
    }

    showDetails() {
        console.log("Inside showDetails()!!!!");

        var searchURL = "";

        //console.log(this.searchField);
        console.log(this.vinSearchFieldValue);
        searchURL = "/rest/car/vin/" + this.vinSearchFieldValue;
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => this.car = res.json());
    }
}


