import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Router} from "@angular/router";

import {Car} from "./car";
import {Customer} from "./customer";

@Component({
    selector: 'cardetail',
    templateUrl: '../partials/cardetail.component.html',
    //styleUrls: ['../css/car.component.styles.css'],
})
export class CarDetailComponent {

    title: string = "Customer-Car Detail Form";
    car: Car;
    customer: Customer;
    vinSearchFieldValue: string = "";

    constructor(private http: Http, private router: Router) {
    }

    showDetails() {
        console.log("Inside cardetail.component.showDetails()!!!!");

        var searchURL = "";
        console.log(this.vinSearchFieldValue);
        searchURL = "/rest/car/vin/" + this.vinSearchFieldValue;
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => this.car = res.json());
    }

    routeToMainComponent() {
        console.log("inside cardetail.routeToMainComponent()");
        console.log(this.car);
        if (this.car) {
            var departmentLink = ['/departments', this.car.vin];
            this.router.navigate(departmentLink);
        }
    }
}


