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
let CarComponent = class CarComponent {
    constructor(http) {
        this.http = http;
        this.title = "Car Form";
        //this.car = new Car('Audi','A4','2017','VT','audi-a4.png');
    }
    addCar() {
        console.log("Inside addCar()!!!!");
        let addUrl = "/rest/add";
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.post(addUrl, this.car, options).subscribe(res => {
            this.successMessage = res.toString();
            console.log(res.text());
            this.errorMessage = "";
        }, error => {
            this.errorMessage = error;
            this.successMessage = "";
        });
    }
};
CarComponent = __decorate([
    core_1.Component({
        selector: 'acrs-app',
        templateUrl: '../partials/car.component.html',
    }), 
    __metadata('design:paramtypes', [http_1.Http])
], CarComponent);
exports.CarComponent = CarComponent;
//# sourceMappingURL=car.component.js.map