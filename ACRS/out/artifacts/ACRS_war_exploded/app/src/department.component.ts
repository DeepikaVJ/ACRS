import {Component, Directive, OnInit} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Department} from "./department";
import {CarComponent} from "./car.component"
import {Dept1DentingpaintingComponent} from "./dept1.dentingpainting.component";
import {ActivatedRoute} from "@angular/router";
import {Car} from "./car";
import {Service} from "./service";
import {Observable} from "rxjs/Observable";
import {StorageService} from "./storage.service";

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
        <h1 style="color: aqua">{{selectedServiceIds}}</h1>
        <services-outlet1 *ngIf="selectedDept===1" (childData)='populateSelectedServices($event)'></services-outlet1>
        <services-outlet2 *ngIf="selectedDept===2"></services-outlet2>
        <services-outlet3 *ngIf="selectedDept===3"></services-outlet3>
        <services-outlet4 *ngIf="selectedDept===4"></services-outlet4>

    `,

    styleUrls: ['../css/department.component.styles.css']
})
export class DepartmentComponent implements OnInit {
    title: string = "Department Detail";
    departments: Department[];
    selectedDept: number;

    private selectedServiceIds:number[];
    private totalPrice: number;


    constructor(private http: Http, activatedRoute: ActivatedRoute,private storageService:StorageService) {

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

    populateSelectedServices(serviceData: any) {
        console.log("===========================================================");
        let id = serviceData.target.id;
        console.log("data from child: " + id);
        let value = serviceData.target.value;
        console.log("data from child: " + value);
        this.totalPrice = this.totalPrice + parseInt(value);
        console.log("Total Price: " + this.totalPrice);

        this.storageService.get();
       // let service = this.storageService.getService();

        //this.selectedServiceIds.push(parseInt(id));

        console.log("===========================================================");
    }
}


