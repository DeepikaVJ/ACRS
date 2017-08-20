"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
let CustomerDetailComponent = class CustomerDetailComponent {
    constructor(http) {
        this.http = http;
        this.title = "Customer-Car Detail Form";
    }
    ngOnInit() {
    }
    showDetails() {
        console.log("Inside showDetails()!!!!");
        var searchURL = "";
        console.log(this.vinSearchFieldValue);
        searchURL = "/rest/customer/cid/" + this.vinSearchFieldValue;
        console.log(searchURL);
        var requestHeaders = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.http.get(searchURL, options).subscribe(res => this.customer = res.json());
    }
};
CustomerDetailComponent = __decorate([
    core_1.Component({
        selector: 'acrs-app',
        template: `
        <div><h1>{{title}}</h1>
            <h1>Enter CID</h1>
            <input type='number' required [(ngModel)]='vinSearchFieldValue'>
            <input type='button' value='ShowDetails' (click)='showDetails();'/> <br/>
            <h1>Customer Details</h1>

            <!--Customer Object: <h2 *ngIf="customer">{{customer}} </h2>-->
            CustomerID: <h2 *ngIf='customer?.name'>{{customer?.customerId}} </h2>
            Name: <h2 *ngIf='customer?.name'> {{customer?.name}}</h2>
            Address<h2 *ngIf='customer?.address'>{{customer?.address}} </h2>
            Contact <h2 *ngIf='customer?.contact'>{{customer?.contact}} </h2>
        </div>`
    }), 
    __metadata('design:paramtypes', [http_1.Http])
], CustomerDetailComponent);
exports.CustomerDetailComponent = CustomerDetailComponent;
//# sourceMappingURL=customerdetail.component.js.map