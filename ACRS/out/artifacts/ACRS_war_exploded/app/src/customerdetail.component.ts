import {Component, OnInit} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";


import {Customer} from "./customer";

@Component({
    selector: 'acrs-app',
    template: `<div>     
        <h1>Enter CID</h1>
        <h1>{{title}}</h1>
        
        <input type="number" id="cid" required [(ngModel)]="vinSearchFieldValue">
        <input type='button' value='ShowDetails' (click)='showDetails();'/>
        <br/>
        <h1>Customer Details</h1>
        <h3>CustomerID</h3>
        <h2>hi {{customer.customerId}} </h2>
        <!--Name: <h2> {{customer.name}}</h2>-->
        <!--Address<h2>{{customer.address}} </h2>-->
        <!--Contact <h2>{{customer.contact}} </h2>-->
    </div>`

})
export class CustomerDetailComponent implements OnInit{
    ngOnInit(): void {
    }

    title: string = "Customer-Car Detail Form";

    customer: Customer;

    vinSearchFieldValue: number;


    constructor(private http: Http) {
        // this.car = new Car('Audi','A4','2017','VT','audi-a4.png');
    }

    showDetails() {
        console.log("Inside showDetails()!!!!");

        var searchURL = "";
        console.log(this.vinSearchFieldValue);
        searchURL = "/rest/customer/cid/" + this.vinSearchFieldValue;

        console.log(searchURL);
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => this.customer = res.json());
        console.log(this.customer.name);
        console.log(this.customer.customerId);
        console.log(this.customer.address);
        console.log(this.customer.contact);
    }
}


