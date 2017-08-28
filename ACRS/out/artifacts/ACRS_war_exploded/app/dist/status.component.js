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
        this.serviceStatusList = [];
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
            .subscribe(res => this.serviceStatusList = res.json(), err => console.log(err), () => this.allocateJobs());
    }
    updateStatus(statusId, status) {
        let updateStatusUrl = "rest/updateStatus/statusID/" + statusId + "/status/" + status;
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.http.put(updateStatusUrl, options).subscribe(status => {
            console.log(status);
        });
        this.updateAllStatusFromDatabase();
    }
    updateAllStatusFromDatabase() {
        var searchURL = "/rest/status/appointment/" + this.receivedAppointmentId;
        var requestHeaders = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.http.get(searchURL, options)
            .subscribe(res => {
            this.serviceStatusList = res.json();
            console.log("data update succesfull........");
        });
    }
    updateLogTable(log) {
        var table = document.getElementById("logTable");
        var row = table.insertRow();
        row.insertCell(0).innerHTML = log;
    }
    allocateJobs() {
        console.log("inside status.allocateJobs()");
        for (let serviceStatus of this.serviceStatusList) {
            let appointmentId = serviceStatus.appointmentId;
            let statusId = serviceStatus.statusId;
            let departmentId = serviceStatus.service.department.departmentId;
            let serviceId = serviceStatus.service.serviceId;
            let noOfTechnicians = serviceStatus.service.department.numberOfTechnicians;
            switch (departmentId) {
                case 1:
                    if (this.counter1 < noOfTechnicians) {
                        this.counter1++;
                        this.departmentstatus = "serviceId  " + serviceId + " Allocated to department One ";
                        //servicing in progress
                        this.updateLogTable(this.departmentstatus);
                        this.updateStatus(statusId, 0);
                    }
                    else {
                        this.departmentstatus = "Department One Busy ";
                        this.updateLogTable(this.departmentstatus);
                        continue;
                    }
                    break;
                case 2:
                    if (this.counter2 < noOfTechnicians) {
                        this.counter2++;
                        this.departmentstatus = "serviceId  " + serviceId + " Allocated to department Two ";
                        this.updateLogTable(this.departmentstatus);
                        //servicing in progress
                        this.updateStatus(statusId, 0);
                    }
                    else {
                        this.departmentstatus = "Department Two Busy ";
                        this.updateLogTable(this.departmentstatus);
                        continue;
                    }
                    break;
                case 3:
                    if (this.counter3 < noOfTechnicians) {
                        this.counter3++;
                        this.departmentstatus = "serviceId  " + serviceId + " Allocated to department Three ";
                        this.updateLogTable(this.departmentstatus);
                        //servicing in progress
                        this.updateStatus(statusId, 0);
                    }
                    else {
                        this.departmentstatus = "Department Three Busy ";
                        this.updateLogTable(this.departmentstatus);
                        continue;
                    }
                    break;
                case 4:
                    if (this.counter4 < noOfTechnicians) {
                        this.counter4++;
                        this.departmentstatus = "serviceId  " + serviceId + " Allocated to department Four ";
                        this.updateLogTable(this.departmentstatus);
                        //servicing in progress
                        this.updateStatus(statusId, 0);
                    }
                    else {
                        this.departmentstatus = "Department Four Busy ";
                        this.updateLogTable(this.departmentstatus);
                        continue;
                    }
                    break;
                default:
                    this.departmentstatus = "Error in Allocation ";
                    this.updateLogTable(this.departmentstatus);
                    break;
            }
        }
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