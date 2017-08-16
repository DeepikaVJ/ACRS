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
let CarDetailComponent = class CarDetailComponent {
    addCar() {
        console.log("car vin number is" + this.vin);
        console.log("car brand is" + this.brand);
        console.log("car make is" + this.model);
        console.log("car year of manufacture " + this.yearOfManufacture);
        console.log("car trim is " + this.trim);
    }
};
CarDetailComponent = __decorate([
    core_1.Component({
        template: `<div class = 'carDetails'>
		<h1>Car Details</h1>
		VIN : <input type='text' [(ngModel)]='vin' /><br/>
		Brand : <input type='text' [(ngModel)]='brand' /><br/>
		Model : <input type='text' [(ngModel)]='model' /><br/>
		Year of Manufacture : <input type='number' [(ngModel)]='yearOfManufacture' /><br/>
		Trim : <input type='text' [(ngModel)]='trim' /><br/>

		<input type='button' value='Add' (click)='addCar();' />
		</div>`,
        selector: 'my-app',
        styles: [`

		.carDetails {
			border:8px inset rgba(50,50,60,0.8);
			width:50%;
			text-align:center;
		}

		.carDetails h1{
			color:Black;
			width:90%;
			margin:auto;
			margin-top:10px;
			margin-bottom:10px;
		}

		.carDetails input{
			background-color:rgba(100,100,50,0.3);
			color:white;
			text-align:center;
			height:30px;
			font-size:26px;
			width:50%;
			margin:auto;
			margin-top:10px;
			margin-bottom:10px;
			border-radius:20px;
		}

		.carDetails input[type=button]{
			background-color:black;
			width:30%;
			height:40px;
		}

		.carDetails input[type=number]{
			margin-left:1px;
			background-color:rgba(100,100,50,0.3);
			height:30px;
			width:30%;
		}

	`]
    }), 
    __metadata('design:paramtypes', [])
], CarDetailComponent);
exports.CarDetailComponent = CarDetailComponent;
//# sourceMappingURL=carForm.component.js.map