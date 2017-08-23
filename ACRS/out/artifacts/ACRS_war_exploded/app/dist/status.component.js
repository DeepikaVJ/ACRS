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
let StatusComponent = class StatusComponent {
    constructor(http, router, activatedRoute) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = "Department Allocation Status";
        this.receivedAppointmentId = 0;
        this.counter1 = 0;
        this.counter2 = 0;
        this.counter3 = 0;
        this.counter4 = 0;
        this.departmentstatus = "";
        console.log("Inside status.constructor()");
        this.activatedRoute.params.subscribe((receivedData) => {
            this.receivedAppointmentId = parseInt(receivedData['appointmentId'].toString());
            console.log("received appointmentId : " + this.receivedAppointmentId);
        });
    }
    ngOnInit() {
        console.log("Inside status.ngOnInit()");
        var searchURL = "";
        // searchURL = "/rest/allstatus/";
        searchURL = "/rest/status/appointment/" + this.receivedAppointmentId;
        var requestHeaders = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.http.get(searchURL, options)
            .subscribe(res => this.serviceStatus = res.json(), err => console.log(err), () => this.allocateJobs());
    }
    allocateJobs() {
        console.log("inside status.allocateJobs()");
        /* for (of this.serviceStatus) {
             let departmentId = this.serviceStatus.serviceMenu.department.departmentId;
             let noOfTechnicians = this.serviceStatus.serviceMenu.department.numberOfTechnicians;
             if (departmentId === 1) {
                 if (this.counter1 < noOfTechnicians) {
                     this.counter1++;
                     this.departmentstatus = "Allocated to department One";
                 }
                 else {
                     departmentstatus = "Department Busy";
                 }
             }
 
             if (departmentId == 2) {
                 if (counter2 < 4) {
                     counter1++;
                     departmentstatus = "Allocated to department Two";
                 }
                 else {
                     departmentstatus = "Department Busy";
                 }
             }
 
             if (departmentId == 3) {
                 if (counter3 < 4) {
                     counter1++;
                     departmentstatus = "Allocated to department Three";
                 }
                 else {
                     departmentstatus = "Department Busy";
                 }
             }
 
             if (departmentId == 4) {
                 if (counter4 < 4) {
                     counter1++;
                     departmentstatus = "Allocated to department Four";
                 }
                 else {
                     departmentstatus = "Department Busy";
                 }
             }
         }
 */
    }
};
StatusComponent = __decorate([
    core_1.Component({
        selector: 'status',
        templateUrl: '../partials/status.component.html',
        styleUrls: ['../css/cardetail.component.styles.css'],
    }), 
    __metadata('design:paramtypes', [http_1.Http, router_1.Router, router_1.ActivatedRoute])
], StatusComponent);
exports.StatusComponent = StatusComponent;
//# sourceMappingURL=status.component.js.map