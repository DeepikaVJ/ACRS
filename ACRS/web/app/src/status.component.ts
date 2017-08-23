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
    serviceStatus: ServiceStatus;
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
                    this.serviceStatus = res.json(),
                err => console.log(err),
                () => this.allocateJobs()
            );

    }


    private allocateJobs() {
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
}


