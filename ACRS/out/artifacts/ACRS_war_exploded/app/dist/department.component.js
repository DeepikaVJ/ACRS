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
const storage_service_1 = require("./storage.service");
let DepartmentComponent = class DepartmentComponent {
    constructor(http, activatedRoute, storageService) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.title = "Department Detail";
        this.departments = [];
        /*private selectedServiceIds: number[] = [];
        private selectedServiceNames: string[] = [];
        private totalPrice: number = 0;*/
        this.appointmentDTO = null;
        this.successMessage = "";
        this.errorMessage = "";
        this.activatedRoute.params.subscribe((prms) => {
            var receivedVin = parseInt(prms['vin']);
            this.appointmentDTO.vin = receivedVin;
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
        console.log("Inside StorageService.add()");
        for (let id of this.appointmentDTO.selectedServiceIds) {
            if (id === serviceId) {
                this.appointmentDTO.selectedServiceIds.splice(this.appointmentDTO.selectedServiceIds.indexOf(id), 1);
                this.appointmentDTO.totalPrice = this.appointmentDTO.totalPrice - parseInt(price);
                flag = true;
            }
        }
        for (let name1 of this.appointmentDTO.selectedServiceNames) {
            if (name1 === name) {
                this.appointmentDTO.selectedServiceNames.splice(this.appointmentDTO.selectedServiceNames.indexOf(name1), 1);
                flag = true;
            }
        }
        if (flag === false) {
            this.appointmentDTO.selectedServiceIds.push(serviceId);
            this.appointmentDTO.selectedServiceNames.push(name);
            this.appointmentDTO.totalPrice = this.appointmentDTO.totalPrice + parseInt(price);
            console.log("Total Price: " + this.appointmentDTO.totalPrice);
        }
    }
    getServiceList() {
        console.log("Inside StorageService.get()");
        console.log("returning array:");
        for (let id of this.appointmentDTO.selectedServiceIds) {
            console.log(" " + id);
        }
        //return this.selectedServiceIds;
    }
    populateSelectedServices(serviceData) {
        this.addToServiceList(serviceData.target.id, serviceData.target.name, serviceData.target.value);
        this.getServiceList();
        console.log("===========================================================");
        let id = serviceData.target.id;
        console.log("data from child: " + id);
        let pric = serviceData.target.value;
        console.log("data from child: " + pric);
        // this.storageService.get();
        //this.selectedServiceIds.push(parseInt(id));
        console.log("===========================================================");
    }
    postAppointmentRecordToDB() {
        console.log("Inside postAppointmentRecordToDB()!!!!");
        let addUrl = "/rest/appointment/add";
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.post(addUrl, this.appointmentDTO, options).subscribe(result => {
            this.successMessage = result.toString();
            console.log(result.text());
            this.errorMessage = "";
        }, error => {
            this.errorMessage = error;
            this.successMessage = "";
        });
    }
};
DepartmentComponent = __decorate([
    core_1.Component({
        selector: 'departments',
        template: `
        <!--<h1 name="customerDetail">Customer Detail</h1>-->
        
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

        Selected ServiceIds: <h2 style="color: aqua">{{selectedServiceIds}}</h2>
        Selected ServiceNames : <h2 style="color: aqua">{{selectedServiceNames}}</h2>
        Total Price: <h2 style="color: aqua">{{totalPrice}}</h2>
       
        <button name="confirm" value="Confirm" (click)="postAppointmentRecordToDB();">Confirm</button>
        <div *ngIf="successMessage" [ngClass] = "'success'"> {{successMessage}} </div>
        <div *ngIf="errorMessage" [ngClass] = "'error'"> {{errorMessage}} </div>
       <!-- <table class="serviceList">
            <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let department of departments let i=index">
                <td>{{department?.departmentId}}</td>
                <td>{{department?.name}}</td>
                <td>{{department?.name}}</td>
            </tr>
            </tbody>
        </table>-->
        
    `,
        styleUrls: ['../css/department.component.styles.css']
    }), 
    __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute, storage_service_1.StorageService])
], DepartmentComponent);
exports.DepartmentComponent = DepartmentComponent;
//# sourceMappingURL=department.component.js.map