import {Component, OnInit} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceStatus} from "./serviceStatus";
import {Service} from "./service";
import {of} from "rxjs/observable/of";


@Component({
    selector: 'status',
    templateUrl: '../partials/status.component.html',
    styleUrls: ['../css/cardetail.component.styles.css'],
})
export class StatusComponent implements OnInit {

    title: string = "Department Allocation Status";
    serviceStatusDataFromRest: ServiceStatus;
    serviceStatusList: ServiceStatus[] = [];
    receivedAppointmentId: number = 0;
    private completion: boolean;
    private counter1: number = 0;
    private counter2: number = 0;
    private counter3: number = 0;
    private counter4: number = 0;
    private departmentstatus: string = "";

    constructor(private http: Http, private router: Router, private activatedRoute: ActivatedRoute) {
        console.log("Inside status.constructor()");
        this.activatedRoute.params.subscribe((receivedData) => {
            this.receivedAppointmentId = parseInt(receivedData['appointmentId'].toString());
            console.log("received appointmentId : " + this.receivedAppointmentId);
        })
    }

    ngOnInit(): void {
        console.log("Inside status.ngOnInit()");
        var searchURL = "";
        // searchURL = "/rest/allstatus/";
        searchURL = "/rest/status/appointment/" + this.receivedAppointmentId;
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(searchURL, options)
            .subscribe(res =>
                    this.serviceStatusList = res.json(),
                err => console.log(err),
                () => this.allocateJobs()
            );

    }


    updateStatus(statusId: number, status: number) {

        let updateStatusUrl = "rest/updateStatus/statusID/" + statusId + "/status/" + status;
        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.put(updateStatusUrl, options).subscribe(
            status => {
                console.log(status);
            });
        this.updateAllStatusFromDatabase();
    }

    updateAllStatusFromDatabase() {
        var searchURL = "/rest/status/appointment/" + this.receivedAppointmentId;
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(searchURL, options)
            .subscribe(res => {
                this.serviceStatusList = res.json();
                console.log("data update succesfull........");
            });
    }

    updateLogTable(log: string) {
        var table: HTMLTableElement = <HTMLTableElement> document.getElementById("logTable");
        var row = table.insertRow();
        row.insertCell(0).innerHTML = log;
    }


    private allocateJobs() {
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
}


