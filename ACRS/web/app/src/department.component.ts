import {Component, Directive, OnInit} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Department} from "./department";
import {ActivatedRoute, Router} from "@angular/router";
import {AppointmentDTO} from "./appointmentDTO";

@Component({
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
})
export class DepartmentComponent implements OnInit {
    title: string = "Department Detail";
    departments: Department[] = [];
    selectedDept: number;

    appointmentDTO: AppointmentDTO;
    private selectedServiceIds: number[] = [];
    private selectedServiceNames: string[] = [];
    private totalPrice: number = 0;
    private appointmentId: number=0;
    private errorMessage: string = '';
    private receivedVin:number=0;


    constructor(private http: Http, private activatedRoute: ActivatedRoute, private router: Router) {
        this.activatedRoute.params.subscribe((receivedData) => {
            this.receivedVin = parseInt(receivedData['vin']);
            console.log("receivedVin: " + this.receivedVin);
        })
    }

    ngOnInit(): void {
        console.log("Inside DepartmentComponent.ngOnInit()!!!!");
        var searchURL = "/rest/departments";
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => this.departments = res.json());
    }

    displayDept(deptNo: number) {
        this.selectedDept = deptNo;
    }

    addToServiceList(serviceId: number, name: string, price: any) {
        let flag: boolean = false;
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

    populateSelectedServices(serviceData: any) {

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

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.appointmentDTO = new AppointmentDTO(this.receivedVin, this.totalPrice, this.selectedServiceIds, this.selectedServiceNames);

        //this.http.post(addUrl,this.car,options).subscribe(res => this.appointmentId = res.toString());
        this.http.post(addUrl, this.appointmentDTO, options).subscribe(
            AppointmentId => {
                this.appointmentId = parseInt(AppointmentId.text());
                console.log("AppointmentId Generated: "+AppointmentId.text());
                this.errorMessage = ""
                var statusLink = ['/status',this.appointmentId];
                this.router.navigate(statusLink);
            },
            error => {
                this.errorMessage = <any>error;
                this.appointmentId = 0;
            });

    }
}


