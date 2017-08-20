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
        this.storageService = storageService;
        this.title = "Department Detail";
        this.departments = [];
        this.selectedServiceIds = [];
        this.totalPrice = 0;
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
    addToServiceList(serviceId, price) {
        let flag = false;
        console.log("Inside StorageService.add()");
        for (let id of this.selectedServiceIds) {
            if (id === serviceId) {
                this.selectedServiceIds.splice(this.selectedServiceIds.indexOf(id), 1);
                this.totalPrice = this.totalPrice - parseInt(price);
                flag = true;
            }
        }
        if (flag === false) {
            this.selectedServiceIds.push(serviceId);
            this.totalPrice = this.totalPrice + parseInt(price);
            console.log("Total Price: " + this.totalPrice);
        }
    }
    getServiceList() {
        console.log("Inside StorageService.get()");
        console.log("returning array:");
        for (let id of this.selectedServiceIds) {
            console.log(" " + id);
        }
        //return this.selectedServiceIds;
    }
    populateSelectedServices(serviceData) {
        this.addToServiceList(serviceData.target.id, serviceData.target.value);
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

        Selected Services: <h2 style="color: aqua">{{selectedServiceIds}}</h2>
        Total Price: <h2 style="color: aqua">{{totalPrice}}</h2>
    `,
        styleUrls: ['../css/department.component.styles.css']
    }), 
    __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute, storage_service_1.StorageService])
], DepartmentComponent);
exports.DepartmentComponent = DepartmentComponent;
//# sourceMappingURL=department.component.js.map