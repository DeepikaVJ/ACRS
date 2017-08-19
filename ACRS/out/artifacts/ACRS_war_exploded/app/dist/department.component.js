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
let DepartmentComponent = class DepartmentComponent {
    constructor(http, activatedRoute) {
        this.http = http;
        this.title = "Department Detail";
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
};
DepartmentComponent = __decorate([
    core_1.Component({
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
            <tr *ngFor="let department of departments">
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
        
        <services-outlet1 *ngIf="selectedDept===1"></services-outlet1>
        <services-outlet2 *ngIf="selectedDept===2"></services-outlet2>
        <services-outlet3 *ngIf="selectedDept===3"></services-outlet3>
        <services-outlet4 *ngIf="selectedDept===4"></services-outlet4>
    `,
        selector: 'departments',
        styleUrls: ['../css/department.component.styles.css']
    }), 
    __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute])
], DepartmentComponent);
exports.DepartmentComponent = DepartmentComponent;
//# sourceMappingURL=department.component.js.map