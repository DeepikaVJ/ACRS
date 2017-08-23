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
const appointmentDTO_1 = require("./appointmentDTO");
let DepartmentComponent = class DepartmentComponent {
    constructor(http, activatedRoute, router) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.title = "Department Detail";
        this.departments = [];
        this.selectedServiceIds = [];
        this.selectedServiceNames = [];
        this.totalPrice = 0;
        this.appointmentId = 0;
        this.errorMessage = '';
        this.receivedVin = 0;
        this.activatedRoute.params.subscribe((receivedData) => {
            this.receivedVin = parseInt(receivedData['vin']);
            console.log("receivedVin: " + this.receivedVin);
        });
    }
    ngOnInit() {
        console.log("Inside DepartmentComponent.ngOnInit()!!!!");
        var searchURL = "/rest/departments";
        var requestHeaders = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.http.get(searchURL, options).subscribe(res => this.departments = res.json());
    }
    displayDept(deptNo) {
        this.selectedDept = deptNo;
    }
    addToServiceList(serviceId, name, price) {
        let flag = false;
        console.log("Inside addToServiceList");
        for (let id of this.selectedServiceIds) {
            if (id === serviceId) {
                this.selectedServiceIds.splice(this.selectedServiceIds.indexOf(id), 1);
                this.totalPrice = this.totalPrice - parseInt(price);
                flag = true;
            }
        }
        for (let name1 of this.selectedServiceNames) {
            if (name1 === name) {
                this.selectedServiceNames.splice(this.selectedServiceNames.indexOf(name1), 1);
                flag = true;
            }
        }
        if (flag === false) {
            this.selectedServiceIds.push(serviceId);
            this.selectedServiceNames.push(name);
            this.totalPrice = this.totalPrice + parseInt(price);
            console.log("Total Price: " + this.totalPrice);
        }
    }
    getServiceList() {
        console.log("ALL SERVICE IDs AND NAMES: ");
        for (let id of this.selectedServiceIds) {
            console.log(" " + id);
        }
        for (let name of this.selectedServiceNames) {
            console.log(" " + name);
        }
        //return this.selectedServiceIds;
    }
    populateSelectedServices(serviceData) {
        this.addToServiceList(serviceData.target.id, serviceData.target.name, serviceData.target.value);
        /* console.log("===========================================================");
         let id = serviceData.target.id;
         console.log("data from child: " + id);
         let pric = serviceData.target.value;
         console.log("data from child: " + pric);
         // this.storageService.get();
         //this.selectedServiceIds.push(parseInt(id));
         console.log("===========================================================");*/
    }
    postAppointmentRecordToDB() {
        console.log("Inside postAppointmentRecordToDB()!!!!");
        let addUrl = "/rest/appointment/add";
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.appointmentDTO = new appointmentDTO_1.AppointmentDTO(this.receivedVin, this.totalPrice, this.selectedServiceIds, this.selectedServiceNames);
        //this.http.post(addUrl,this.car,options).subscribe(res => this.appointmentId = res.toString());
        this.http.post(addUrl, this.appointmentDTO, options).subscribe(AppointmentId => {
            this.appointmentId = parseInt(AppointmentId.text());
            console.log("AppointmentId Generated: " + AppointmentId.text());
            this.errorMessage = "";
            var statusLink = ['/status', this.appointmentId];
            this.router.navigate(statusLink);
        }, error => {
            this.errorMessage = error;
            this.appointmentId = 0;
        });
    }
};
DepartmentComponent = __decorate([
    core_1.Component({
        selector: 'departments',
        template: `
        <!--<h1 name="customerDetail">Customer Detail</h1>-->
        <!--<table class="departmentList">
            <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let department of departments", let i="index">
                <td>{{department?.departmentId}}</td>
                <td>{{department?.name}}</td>
            </tr>
            </tbody>
        </table>-->
        <div class="topnav">
            <a name="dept1" (click)="displayDept(1);">Denting Painting</a>
            <a name="dept2" (click)="displayDept(2);">Repairs and Fixes</a>
            <a name="dept3" (click)="displayDept(3);">Cleaning and Care</a>
            <a name="dept4" (click)="displayDept(4);">Periodic Services</a>
        </div>

        <services-outlet1 *ngIf="selectedDept===1" (childData)='populateSelectedServices($event)'></services-outlet1>
        <services-outlet2 *ngIf="selectedDept===2" (childData)='populateSelectedServices($event)'></services-outlet2>
        <services-outlet3 *ngIf="selectedDept===3" (childData)='populateSelectedServices($event)'></services-outlet3>
        <services-outlet4 *ngIf="selectedDept===4" (childData)='populateSelectedServices($event)'></services-outlet4>

        <!--Selected ServiceIds: <h2 style="color: aqua">{{selectedServiceIds}}</h2>-->
        <br/>
        <div class="summary">
            <h4> Selected Services :</h4>
            <h2 style="color:#4CAF50">{{selectedServiceNames}}</h2>
            <h4> Total Price:</h4>
            <h2 style="color: #4CAF50">{{totalPrice}}</h2>
        </div>
        <!--<h2>{{successMessage}}</h2>-->
        <!--<h2>{{errorMessage}}</h2>-->
         
        <input type="button" class="w3-button w3-black" name="confirm" value="Confirm"
               (click)="postAppointmentRecordToDB();">
    `,
        styleUrls: ['../css/department.component.styles.css']
    }), 
    __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute, router_1.Router])
], DepartmentComponent);
exports.DepartmentComponent = DepartmentComponent;
//# sourceMappingURL=department.component.js.map