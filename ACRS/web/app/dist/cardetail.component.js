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
const router_1 = require("@angular/router");
let CarDetailComponent = class CarDetailComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.title = "Customer-Car Detail Form";
        this.vinSearchFieldValue = 6;
    }
    showDetails() {
        console.log("Inside cardetail.component.showDetails()!!!!");
        var searchURL = "";
        console.log(this.vinSearchFieldValue);
        searchURL = "/rest/car/vin/" + this.vinSearchFieldValue;
        var requestHeaders = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.http.get(searchURL, options).subscribe(res => this.car = res.json());
    }
    routeToMainComponent() {
        console.log("inside cardetail.routeToMainComponent()");
        console.log(this.car);
        if (this.car) {
            var departmentLink = ['/departments'];
            this.router.navigate(departmentLink);
        }
    }
};
CarDetailComponent = __decorate([
    core_1.Component({
        selector: 'cardetail',
        templateUrl: '../partials/cardetail.component.html',
    }), 
    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
], CarDetailComponent);
exports.CarDetailComponent = CarDetailComponent;
//# sourceMappingURL=cardetail.component.js.map